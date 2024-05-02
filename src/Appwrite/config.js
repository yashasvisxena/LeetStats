/* eslint-disable no-unused-vars */
import conf from "../conf/conf";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client.setEndpoint(conf.appwriteUrl).setProject(conf.projectId);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async addStudent({ studentName, studentUserName, userId }) {
    try {
      return await this.databases.createDocument(
        conf.databaseId,
        conf.studentId,
        studentUserName,
        {
          studentName,
          studentUserName,
          userId,
        }
      );
    } catch (error) {
      console.log("Appwrite service :: addStudent :: error ", error);
    }
  }

  async deleteStudent(studentUserName) {
    try {
      await this.databases.deleteDocument(
        conf.databaseId,
        conf.studentId,
        studentUserName
      );
      return true;
    } catch (error) {
      console.log("Appwrite service :: deleteStudent :: error ", error);
      return false;
    }
  }

  async updateStudent(studentUserName, { studentName, newUserName }) {
    try {
      this.deleteStudent(studentUserName);
      this.addStudent({ studentName, newUserName, userId });
    } catch (error) {
      console.log("Appwrite service :: updateStudent :: error ", error);
    }
  }

  async getStudent(studentUserName) {
    try {
      return await this.databases.getDocument(
        conf.databaseId,
        conf.studentId,
        studentUserName
      );
    } catch (error) {
      console.log("Appwrite service :: getStudents :: error ", error);
      return false;
    }
  }

  async listStudents(userId) {
    try {
      return await this.databases.listDocuments(
        conf.databaseId,
        conf.studentId,
        [Query.equal("userId", userId), Query.orderAsc("studentName")]
      );
    } catch (error) {
      console.log("Appwrite service :: listStudents :: error ", error);
      return false;
    }
  }

  async addTeacher({ teacherName, fileId, userId }) {
    try {
      return await this.databases.createDocument(
        conf.databaseId,
        conf.teacherId,
        userId,
        {
          teacherName,
          fileId,
          userId,
        }
      );
    } catch (error) {
      console.log("Appwrite service :: addTeacher :: error ", error);
    }
  }

  async updateTeacher(userId, { fileId }) {
    try {
      return await this.databases.updateDocument(
        conf.databaseId,
        conf.teacherId,
        userId,
        {
          FileId : fileId,
        }
      );
    } catch (error) {
      console.log("Appwrite service :: updateTeacher :: error ", error);
    }
  }
  // file upload service
  async uploadFile(file, userId ,fileId) {
    try {
      this.deleteFile(fileId);
      const id = ID.unique();
      await this.bucket.createFile(conf.storageId, id, file);
      this.updateTeacher(userId, { id });
    } catch (error) {
      console.log("Appwrite service :: uploadFile :: error ", error);
      return false;
    }
  }

  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile(conf.storageId, fileId);
      return true;
    } catch (error) {
      console.log("Appwrite service :: deleteFile :: error ", error);
      return false;
    }
  }
}

const service = new Service();

export default service;
