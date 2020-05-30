import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "../auth.service";

@Component({
    selector: "app-login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
    get userName() {
        return this.loginForm.get("userName");
    }

    get password() {
        return this.loginForm.get("password");
    }

    constructor(
        private fb: FormBuilder,
        private route: Router,
        public auth: AuthService
    ) {}

    loginForm = this.fb.group({
        userName: ["", Validators.required],
        password: ["", [Validators.required, Validators.minLength(4)]],
    });

    ngOnInit() {}

    //checks if user is validation and if valid takes him to the home page
    login() {
        if (this.loginForm.valid) {
            this.auth.sendUserInfo(this.loginForm.value.userName);
            this.route.navigate(["covid"]);
        }
    }

    //navigates to home page if user info is present in localStorage
    home() {
        this.route.navigate(["home"]);
    }

    //navigates to about page if user info is present in localStorage
    about() {
        this.route.navigate(["about"]);
    }
}
