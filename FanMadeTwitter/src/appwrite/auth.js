import {ID, Client, Account} from "appwrite"
import conf from '../conf/conf'

export class AuthService{
    client=new Client();
    account;

    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId)
    this.account=new Account(this.client)
    }

    async createAccount({email, password, name}){
        try {
            const userAccount=await this.account.create(ID.unique(), email,  password, name);
            if(userAccount){
                return this.login({email, password})
            }else{
                return userAccount
            }
            
        } catch (error) {
            throw error;
            
        }
    }

    async login({email, password}){
        try {
            return await account.createEmailSession({email, password})
        } catch (error) {
            throw error
        }
    }

    async getCurrentUser(){
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser:: error",  error);
        }

        return null;
    }

    async  logOut(){
        try {
            return await this.account.deleteSessions();
        } catch (error) {
            console("Appwrite service :: getCurrentUser:: error",  error)
        }
    }
}

async

const authservice=new AuthService()

export default authservice