import express from "express"
import {ApolloServer} from "@apollo/server"
import {expressMiddleware} from "@apollo/server/express4"
import cors from "cors"
import bodyParser from "body-parser"


async function startServer() {
    const app = express()
    const server = new ApolloServer({
        typeDefs,
        resolvers
    })
    await server.start()
    app.use(bodyParser.json())
    app.use(cors())
    
    await server.start()
    app.use("/graphql",expressMiddleware(server))

    app.listen(4000, () => console.log("Server started on port 4000"))
}

startServer()