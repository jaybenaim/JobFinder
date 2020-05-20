import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./components/auth/login/login.component";
import { PrivacyComponent } from "./components/privacyTerms/privacy/privacy.component";
import { TermsAndConditionsComponent } from "./components/privacyTerms/terms-and-conditions/terms-and-conditions.component";
import { AuthGuard } from "./services/auth-guard.service";
import { SavedJobsComponent } from "./components/pages/SavedJobsPage/saved-jobs/saved-jobs.component";

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./components/pages/home/home.module").then(
        (module) => module.HomeModule
      ),
  },
  {
    path: "jobs",
    loadChildren: () =>
      import("./components/pages/jobs.module").then(
        (module) => module.JobsModule
      ),
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
  {
    path: "saved-jobs",
    component: SavedJobsComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
