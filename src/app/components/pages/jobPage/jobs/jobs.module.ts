import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { JobsRoutingModule } from "./jobs-routing.module";
import { LinkedInComponent } from "../../../jobs/linked-in/linked-in.component";
import { RemoteokComponent } from "../../../jobs/remoteok/remoteok.component";
import { JobsComponent } from "./jobs.component";
import { AllJobsComponent } from "../../../jobs/all-jobs/all-jobs.component";

@NgModule({
  declarations: [
    JobsComponent,
    RemoteokComponent,
    LinkedInComponent,
    AllJobsComponent,
  ],
  imports: [CommonModule, JobsRoutingModule],
  exports: [],
})
export class JobsModule {}
