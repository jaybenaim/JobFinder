import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./components/auth/login/login.component";
import { PrivacyComponent } from "./components/privacyTerms/privacy/privacy.component";
import { TermsAndConditionsComponent } from "./components/privacyTerms/terms-and-conditions/terms-and-conditions.component";
import { AuthGuard } from "./services/auth-guard.service";
import { SavedJobsComponent } from "./components/jobs/saved-jobs/saved-jobs.component";

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
    loadChildren: () =>
      import("./components/jobs/all-jobs/all-jobs.module").then(
        (module) => module.AllJobsModule
      ),
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
