import {ID, Client, Databases, Query, Storage} from "appwrite"
import conf from '../conf/conf'

export class Servive{
    client=new Client();
    databases;
    bucket;
    
    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId)
        this.databases=new Databases(this.client);
        this.bucket=new Storage(this.client);
    }
    
    async createPost({title, slug, content, featuredImage, status, userId}){
        try {
           return await this.databases.createDocument(
            conf.appwriteDatabaseId, 
            conf.appwriteCollectionId,
            slug,
            {
                title,
                content,
                featuredImage,
                userId,
                status

            })
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser:: error",  error);
        }
    }

    async updatePost(slug ,{featuredImage, content, title, status}){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    status,
                    featuredImage,
                    content
                }
            )
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser:: error",  error);
        }
    }

    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
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
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser:: error",  error);
            return false;
        }
    }

    async getPosts(queries=[Query.equal("status", "active")]){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries,
            )
        } catch (error) {
            return false;
            console.log("Appwrite service :: getCurrentUser:: error",  error);
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