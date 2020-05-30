import { Injectable } from "@angular/core";
import { CanDeactivate, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

//interface which is implemented in about.ts
export interface CanDeactivateCompo {
  confirm(): boolean;
}

@Injectable()
export class CanDeGuard implements CanDeactivate<CanDeactivateCompo> {
  canDeactivate(
    component: CanDeactivateCompo
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return component.confirm();
  }
}
