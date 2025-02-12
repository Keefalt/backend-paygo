// Menggunakan PascalCase untuk nama class yang diimpor
import { AuthenticationController } from "./authenticationController.js";
import { AuthenticationRepository } from "./authenticationRepository.js";
import { AuthenticationService } from "./authenticationService.js";

export class AuthenticationModule {
    constructor(database) {
        const service = new AuthenticationService(new AuthenticationRepository(database.em.fork()));
        this.controller = new AuthenticationController(service);
    }
}