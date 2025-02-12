import { readFileSync, writeFileSync } from "fs";
import { User } from "../../entities/Userentity.js";

export class AuthenticationRepository {
    constructor(em){
        this.em = em
    }

    login(userBody){
 
    }

    register(data){
   
    }

    async getAll(search){
        const dataALLUser = await this.em.findAll(User);
        return dataALLUser
    }
}

