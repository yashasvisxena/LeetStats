/* eslint-disable no-unused-vars */
import conf from "../conf/conf";
import { Client, ID, Databases, Query } from "appwrite";

export class Service {
  client = new Client();
  databases;

  constructor() {
    this.client.setEndpoint(conf.appwriteUrl).setProject(conf.projectId);
    this.databases = new Databases(this.client);
  }

  async addStudent({ studentName, studentUserName }) {
    // try {
    //     return await this.databases.createDocument('conf.databaseId','conf.studentId',ID.unique(),{
    //         studentName:
    //         studentUserName,
    //         studentId:ID.unique(),
    //     });
    // } catch (error) {
    //     console.log("Appwrite service :: addStudent :: error ", error);
    // }
  }
}

const service = new Service();

export default service;
