import { AuthenticationRepository } from "./authenticationRepository.js";

export class AuthenticationService {
    constructor( repository ){

        if(repository){
            this.repository = repository;
        }
    }

    login(userBody){
        return this.repository.login(userBody);
    }

    register(data){
        return this.repository.register(data);
    }

    async getAll(search){
        // kasih validasi kalo search nya itu ga ada character selain alphabet
        if(!/^[A-Za-z]+$/.test(search)){
            throw new Error("search invalid");
        }

        const result = await this.repository.getAll(search);

        return result;
    }
}

