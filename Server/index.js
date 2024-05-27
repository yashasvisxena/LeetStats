import express from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import cors from "cors";
import bodyParser from "body-parser";
import axios from "axios";

async function startServer() {
  const app = express();
  const typeDefs = `
    type Student {
    all: Int!
      easy: Int!
      medium: Int!
      hard: Int!
    }
    type Query {
      getStudent(username: String!): Student!
    }
  `;

  const resolvers = {
    Query: {
      getStudent: async (_, { username }) => {
        const query = `
          query getUserProfile($username: String!) {
            matchedUser(username: $username) {
              submitStats {
                acSubmissionNum {
                  difficulty
                  count
                }
              }
            }
          }
        `;

        const response = await axios.post(
          "https://leetcode.com/graphql",
          {
            query,
            variables: { username },
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const submissionData =
          response.data.data.matchedUser.submitStats.acSubmissionNum;

        const solvedCounts = submissionData.reduce(
          (obj, { difficulty, count }) => {
            obj[difficulty.toLowerCase()] = count;
            return obj;
          },
          {all:0 ,easy: 0, medium: 0, hard: 0 }
        );

        return solvedCounts;
      },
    },
  };

  const server = new ApolloServer({ typeDefs, resolvers });

  app.use(bodyParser.json());
  app.use(cors());

  await server.start();

  app.use("/graphql", expressMiddleware(server));

  app.listen(4000, () => console.log("Server started on port 4000"));
}

startServer();
