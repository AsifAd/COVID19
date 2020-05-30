import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  constructor(public auth: AuthService, public route: Router) {}

  //navigates to the about page
  about() {
    this.route.navigate(["about"]);
  }

  ngOnInit(): void {}
}
