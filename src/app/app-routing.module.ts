import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AllJobsComponent } from "./components/jobs/all-jobs/all-jobs.component";
import { LoginComponent } from "./components/auth/login/login.component";
import { PrivacyComponent } from "./components/privacyTerms/privacy/privacy.component";
import { TermsAndConditionsComponent } from "./components/privacyTerms/terms-and-conditions/terms-and-conditions.component";
import { AuthGuard } from "./services/auth-guard.service";

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./components/shell/home/home.module").then(
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
