const conf ={
    appwriteUrl:String(import.meta.env.VITE_APPWRITE_URL),
    projectId:String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    databaseId:String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    teacherId:String(import.meta.env.VITE_APPWRITE_TEACHER_ID),
    studentId:String(import.meta.env.VITE_APPWRITE_STUDENT_ID),
    storageId:String(import.meta.env.VITE_APPWRITE_STORAGE_ID)
}

export default conf ;