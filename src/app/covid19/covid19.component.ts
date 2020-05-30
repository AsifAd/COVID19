import { Component, OnInit } from "@angular/core";
import { AuthService } from "app/auth.service";

@Component({
    selector: "app-covid19",
    templateUrl: "./covid19.component.html",
    styleUrls: ["./covid19.component.css"],
})
export class Covid19Component implements OnInit {
    constructor(private auth: AuthService) {}

    ngOnInit(): void {}
}
