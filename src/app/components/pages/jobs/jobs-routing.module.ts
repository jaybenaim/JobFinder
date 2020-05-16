import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { RemoteokComponent } from "../../jobs/remoteok/remoteok.component";
import { IndeedComponent } from "../../jobs/indeed/indeed.component";
import { LinkedInComponent } from "../../jobs/linked-in/linked-in.component";
import { AllJobsComponent } from "../../jobs/all-jobs/all-jobs.component";
import { JobsComponent } from "./jobs.component";

const routes: Routes = [
  { path: "", component: JobsComponent },
  {
    path: "jobs/all-jobs",
    component: AllJobsComponent,
  },
  {
    path: "jobs/remoteok",
    component: RemoteokComponent,
  },
  {
    path: "jobs/indeed",
    component: IndeedComponent,
  },
  {
    path: "jobs/linked-in",
    component: LinkedInComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JobsRoutingModule {}
