import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { JobsComponent } from "./jobPage/jobs/jobs.component";
import { LinkedInComponent } from "../jobs/linked-in/linked-in.component";
import { AllJobsComponent } from "../jobs/all-jobs/all-jobs.component";
import { IndeedComponent } from "./indeedPage/indeed/indeed.component";
import { SaveJobComponent } from "../save-job/save-job.component";
import { RemoteokComponent } from "./remoteokPage/remoteok/remoteok.component";
import { RemoteokFormComponent } from "./remoteokPage/remoteok-form/remoteok-form.component";
import { JobsRoutingModule } from "./jobPage/jobs/jobs-routing.module";
import { IndeedResultComponent } from "./IndeedPage/indeed-result/indeed-result.component";
import { IndeedPaginationComponent } from "./IndeedPage/indeed-pagination/indeed-pagination.component";

@NgModule({
  declarations: [
    JobsComponent,
    LinkedInComponent,
    AllJobsComponent,
    IndeedComponent,
    IndeedPaginationComponent,
    IndeedResultComponent,
    SaveJobComponent,
    RemoteokComponent,
    RemoteokFormComponent,
  ],
  imports: [CommonModule, JobsRoutingModule],
  exports: [],
})
export class JobsModule {}
