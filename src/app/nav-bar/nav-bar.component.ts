import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Validators, FormBuilder } from "@angular/forms";
import { AuthService } from "app/auth.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
    selector: "app-nav-bar",
    templateUrl: "./nav-bar.component.html",
    styleUrls: ["./nav-bar.component.css"],
})
export class NavBarComponent implements OnInit {
    constructor(
        public dialog: MatDialog,
        public auth: AuthService,
        private router: ActivatedRoute
    ) {}

    get logedUser() {
        return this.auth.getInfo();
    }
    id: boolean;
    openDialog() {
        this.dialog.open(DialogElementsExampleDialog, {
            width: "500px",
            panelClass: "my-class",
        });
    }
    ngOnInit() {
        this.id = !!this.router.snapshot.paramMap.get("login");
    }
}

@Component({
    selector: "dialog-elements-example-dialog",
    templateUrl: "dialog-elements-example-dialog.html",
    styleUrls: ["./dialog-elements-example-dialog.css"],
})
export class DialogElementsExampleDialog {
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

    // checks if user is validation and if valid takes him to the home page
    login() {
        if (this.loginForm.valid) {
            this.auth.sendUserInfo(this.loginForm.value.userName);
            this.route.navigate(["home"]);
        }
    }

    // navigates to home page if user info is present in localStorage
    // home() {
    //     this.route.navigate(["home"]);
    // }

    // navigates to about page if user info is present in localStorage
    // about() {
    //     this.route.navigate(["about"]);
    // }
}
