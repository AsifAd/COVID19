import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { AuthService } from "../auth.service";
import { CanDeactivateCompo } from "../can-de.guard";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"],
})
export class AboutComponent implements OnInit, CanDeactivateCompo {
  constructor(private fb: FormBuilder, public auth: AuthService) {}

  aboutForm = this.fb.group({
    firstName: [""],
    lastName: [""],
    Email: [""],
    Phone: [""],
    City: [""],
  });
  ngOnInit(): void {}

  //canDeactivate method which returns "true or false"
  confirm() {
    return confirm("Are you sure want to exit?");
  }
}
