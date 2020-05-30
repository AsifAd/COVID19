import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { CanDeactivateCompo } from "../can-de.guard";

@Component({
  selector: "app-material",
  templateUrl: "./material.component.html",
  styleUrls: ["./material.component.css"],
})
export class MaterialComponent implements OnInit, CanDeactivateCompo {
  get firstName() {
    return this.infoForm.get("firstName");
  }
  get lastName() {
    return this.infoForm.get("lastName");
  }
  get Phone() {
    return this.infoForm.get("Phone");
  }
  get City() {
    return this.infoForm.get("City");
  }
  get State() {
    return this.infoForm.get("State");
  }
  get Email() {
    return this.infoForm.get("Email");
  }

  constructor(private _formBuilder: FormBuilder) {}

  infoForm = this._formBuilder.group({
    firstName: ["", Validators.required],
    lastName: ["", Validators.required],
    Phone: ["", Validators.required],
    Email: ["", [Validators.required, Validators.email]],
    City: [""],
    State: [""],
  });

  techForm = this._formBuilder.group({
    FrontEnd: ["", Validators.required],
    BackEnd: ["", Validators.required],
    DataBase: ["", Validators.required],
    Cloud: ["", Validators.required],
    Stack: [""],
    OS: [""],
  });
  ngOnInit() {}

  //canDeactivate method which returns "true or false"
  confirm() {
    return confirm("Are you sure want to exit?");
  }
}
