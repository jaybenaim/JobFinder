import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { RemoteokComponent } from "../remoteok/remoteok.component";
import { IndeedComponent } from "../indeed/indeed.component";
import { LinkedInComponent } from "../linked-in/linked-in.component";
import { AllJobsComponent } from "./all-jobs.component";

const routes: Routes = [
  {
    path: "",
    component: AllJobsComponent,
  },
  {
    path: "all-jobs/remoteok",
    component: RemoteokComponent,
  },
  {
    path: "all-jobs/indeed",
    component: IndeedComponent,
  },
  {
    path: "all-jobs/linked-in",
    component: LinkedInComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllJobsRoutingModule {}
