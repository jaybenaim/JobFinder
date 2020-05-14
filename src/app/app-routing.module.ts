import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AllJobsComponent } from "./components/all-jobs/all-jobs.component";
import { LoginComponent } from "./components/login/login.component";
import { PrivacyComponent } from "./components/privacy/privacy.component";
import { TermsAndConditionsComponent } from "./components/terms-and-conditions/terms-and-conditions.component";
import { AuthGuard } from "./services/auth-guard.service";

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./components/home/home.module").then(
        (module) => module.HomeModule
      ),
  },
  {
    path: "all-jobs",
    component: AllJobsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "privacy",
    component: PrivacyComponent,
  },
  {
    path: "terms-and-conditions",
    component: TermsAndConditionsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
