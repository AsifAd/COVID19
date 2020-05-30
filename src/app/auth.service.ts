import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable()
export class AuthService {
    constructor(private route: Router) {}

    //method to store user info
    sendUserInfo(userName: string) {
        localStorage.setItem("loggedUser", userName);
    }

    //get the user info
    getInfo() {
        return localStorage.getItem("loggedUser");
    }

    //returns true or false weather user info stored or not in localStorage
    isLoggedIn() {
        return !!this.getInfo();
    }

    //clear the memory user and navigate to the login page
    logout() {
        localStorage.removeItem("loggedUser");
        this.route.navigate(["covid"]);
    }
}
