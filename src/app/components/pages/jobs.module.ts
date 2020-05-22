import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { JobsComponent } from "./jobPage/jobs/jobs.component";
import { LinkedInComponent } from "../jobs/linked-in/linked-in.component";
import { AllJobsComponent } from "../jobs/all-jobs/all-jobs.component";
import { RemoteokComponent } from "./remoteokPage/remoteok/remoteok.component";
import { RemoteokFormComponent } from "./remoteokPage/remoteok-form/remoteok-form.component";
import { JobsRoutingModule } from "./jobs-routing.module";

@NgModule({
  declarations: [
    JobsComponent,
    LinkedInComponent,
    AllJobsComponent,

    RemoteokComponent,
    RemoteokFormComponent,
  ],
  imports: [CommonModule, JobsRoutingModule],
  exports: [],
})
export class JobsModule {}
