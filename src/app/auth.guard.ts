import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthService } from "./auth.service";
import { Observable } from "rxjs";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private route: Router) {}

  canActivate() {
    if (this.auth.isLoggedIn()) {
      return true;
    } else {
      this.route.navigate(["login"]);
      return false;
    }
  }
}
