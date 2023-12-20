import {ID} from 'appwrite';
import {INewUser} from "@/type";
import {account} from "@/lib/appWrite/config.ts";



export async function createUserAccount(user: INewUser){
    try {
        const newAccount=await account.create(
            ID.unique(),
            user.email,
            user.password,
            user.name
        )
        return newAccount;
    }catch (error){
        console.log(error);
        return error;
    }
}