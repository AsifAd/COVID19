import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { AppComponent } from "./app.component";
import { MaterialModule } from "./matrial/matrial.module";
import {
    NavBarComponent,
    DialogElementsExampleDialog,
} from "./nav-bar/nav-bar.component";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule, routingComponents } from "./app-routing.module";
import { AuthService } from "./auth.service";
import { AuthGuard } from "./auth.guard";
import { CanDeGuard } from "./can-de.guard";
import { Covid19Component } from './covid19/covid19.component';
import { FooterComponent } from './footer/footer.component';
import { AdviceComponent } from './advice/advice.component';
import { ResourcesComponent } from './resources/resources.component';
import { ContactDevComponent } from './contact-dev/contact-dev.component';
@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        MaterialModule,
    ],
    declarations: [
        AppComponent,
        NavBarComponent,
        DialogElementsExampleDialog,
        routingComponents,
        Covid19Component,
        FooterComponent,
        AdviceComponent,
        ResourcesComponent,
        ContactDevComponent,
    ],
    providers: [AuthService, AuthGuard, CanDeGuard],
    bootstrap: [AppComponent],
})
export class AppModule {}
