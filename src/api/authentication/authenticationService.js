import { AuthenticationRepository } from "./authenticationRepository.js";

export class AuthenticationService {
    constructor(){
        this.repository = new AuthenticationRepository();
    }

    login(userBody){
        return this.repository.login(userBody);
    }

    register(data){
        return this.repository.register(data);
    }
}

