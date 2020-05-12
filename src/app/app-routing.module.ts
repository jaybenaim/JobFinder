import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AllJobsComponent } from "./components/all-jobs/all-jobs.component";

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
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
