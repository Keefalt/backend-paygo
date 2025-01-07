import { StatusCodes } from "http-status-codes";
import { AuthenticationService } from "./authenticationService.js";
import { Router } from "express";

export class AuthenticationController {
    constructor(){
        // import service
        this.service = new AuthenticationService();
        this.login = this.login.bind(this)
    }


    // membuat router
    createRouter() {
        const router = Router();
        
        router.post('/login', (req, res) => this.login(req, res));
        router.post('/register', (req, res) => this.register(req, res));
        
        return router;
    }

    // membuat function login seperti pada app.js
    login(req, res){
        console.log(req.body, 'what');
        
        const result = this.service.login(req.body);
        return res.status(StatusCodes.OK).json(result)
    }

    register(x, y){
        const result = this.service.register(x.body);
        return y.status(StatusCodes.CREATED).json({
            data: result,
            message: "Register berhasil"
        })
    }

}

