import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LinkedInComponent } from "./linkedInPage/linked-in/linked-in.component";
import { AllJobsComponent } from "../jobs/all-jobs/all-jobs.component";
import { JobsComponent } from "./jobPage/jobs/jobs.component";
import { RemoteokComponent } from "./remoteokPage/remoteok/remoteok.component";
import { IndeedComponent } from "./IndeedPage/indeed/indeed.component";

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
