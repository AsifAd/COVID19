import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AuthGuard } from "./auth.guard";
import { LoginComponent } from "./login/login.component";
import { AboutComponent } from "./about/about.component";
import { CanDeGuard } from "./can-de.guard";
import { MaterialComponent } from "./material/material.component";
import { DialogElementsExampleDialog } from "./nav-bar/nav-bar.component";
import { Covid19Component } from "./covid19/covid19.component";
import { AdviceComponent } from "./advice/advice.component";
import { ResourcesComponent } from "./resources/resources.component";
import { ContactDevComponent } from "./contact-dev/contact-dev.component";

const routes: Routes = [
    {
        path: "",
        redirectTo: "covid",
        pathMatch: "full",
    },

    {
        path: "covid",
        component: Covid19Component,
    },
    { path: "login", component: LoginComponent },
    { path: "home", component: HomeComponent, canActivate: [AuthGuard] },
    {
        path: "Myth_busters",
        component: HomeComponent,
        canActivate: [AuthGuard],
    },
    {
        path: "advice",
        component: AdviceComponent,
        canActivate: [AuthGuard],
    },
    {
        path: "about",
        component: AboutComponent,
        canActivate: [AuthGuard],
        canDeactivate: [CanDeGuard],
    },
    {
        path: "contact_dev",
        component: ContactDevComponent,
    },
    {
        path: "resource",
        component: ResourcesComponent,
        canActivate: [AuthGuard],
    },
    {
        path: "contactUs",
        component: AboutComponent,
        canActivate: [AuthGuard],
        canDeactivate: [CanDeGuard],
    },
    {
        path: "stepper",
        component: MaterialComponent,
        canActivate: [AuthGuard],
        canDeactivate: [CanDeGuard],
    },
    {
        path: "what-to-do",
        component: MaterialComponent,
        canActivate: [AuthGuard],
        canDeactivate: [CanDeGuard],
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}

export const routingComponents = [
    LoginComponent,
    HomeComponent,
    AboutComponent,
    MaterialComponent,
    DialogElementsExampleDialog,
];
