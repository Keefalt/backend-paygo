import { readFileSync, writeFileSync } from "fs";

export class AuthenticationRepository {
    constructor(){
        this.data = JSON.parse(readFileSync('./src/api/data.json', 'utf-8'));
    }

    login(userBody){
        const dataUser = this.data.data.find((val) => val.username === userBody.username);

        if (!dataUser) { 
            return "gada boy datanya"
        }

        if (userBody.password === dataUser.password){
            return 'login success';
        } else {
            return 'wrong password';
        }
    }

    register(data){
        writeFileSync('./api/data.json', Buffer.from(JSON.stringify(data)));
        console.log(data);

        return this.data
    }
}

