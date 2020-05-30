import { NgModule } from "@angular/core";
import { MatStepperModule } from "@angular/material/stepper";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatRippleModule } from "@angular/material/core";

const Material = [
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatRippleModule,
];

@NgModule({
    imports: [Material],
    exports: [Material],
})
export class MaterialModule {}
