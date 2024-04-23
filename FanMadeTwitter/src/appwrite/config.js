import {ID, Client, Databases, Query, Storage} from "appwrite"
import conf from '../conf/conf'

export class Servive{
    client=new Client();
    database;
    bucket;
    
    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId)
        this.database=new Databases(this.client);
        this.bucket=new Storage(this.client);
    }
    
    async createPost({title, slug, content, featureImage, status, userId}){
        try {
           return await this.database.createDocument(
            conf.appwriteDatabaseId, 
            conf.appwriteCollectionId,
            slug,
            {
                title,
                content,
                featureImage,
                userId,
                status

            })
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser:: error",  error);
        }
    }

    async updatePost(slug ,{featureImage, content, title, status}){
        try {
            return await this.database.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    status,
                    featureImage,
                    content
                }
            )
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser:: error",  error);
        }
    }

    async deletePost(slug){
        try {
            await this.database.deleteDocument(
               conf.appwriteDatabaseId,
               conf.appwriteCollectionId,
               slug, 

            )
            return true
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser:: error",  error);
            return false
        }

    }

    async getPost(slug){
        try {
            return await this.database.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser:: error",  error);
            return false;
        }
    }

    async getPosts(query=[Query.equal("status", "active")]){
        try {
            return await this.database.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                query
            )
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser:: error",  error);
            return false;
        }
    }

    // file upload service
    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser:: error",  error);
            return false;
        }
    }

    //delete file
    async deleteFile(fileId){
        try {
          await this.deleteFile(
            conf.appwriteBucketId,
            fileId
          )  
          return true;
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser:: error",  error);
            return false;
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }
        
}

const service=new Servive()
export default service;