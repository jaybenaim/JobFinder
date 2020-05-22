import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { JobsComponent } from "./jobPage/jobs/jobs.component";
import { LinkedInComponent } from "../jobs/linked-in/linked-in.component";
import { AllJobsComponent } from "../jobs/all-jobs/all-jobs.component";
import { RemoteokComponent } from "./remoteokPage/remoteok/remoteok.component";
import { RemoteokFormComponent } from "./remoteokPage/remoteok-form/remoteok-form.component";
import { JobsRoutingModule } from "./jobs-routing.module";
import { SaveJobComponent } from "../save-job/save-job.component";
import { SearchBarComponent } from "../search-bar/search-bar.component";
import { SearchBarFilterComponent } from "../search-bar-filter/search-bar-filter.component";
import { IndeedComponent } from "./IndeedPage/indeed/indeed.component";
import { IndeedPaginationComponent } from "./IndeedPage/indeed-pagination/indeed-pagination.component";
import { IndeedResultComponent } from "./IndeedPage/indeed-result/indeed-result.component";
import { HomeComponent } from "./home/home.component";

@NgModule({
  declarations: [
    JobsComponent,
    LinkedInComponent,
    AllJobsComponent,
    SaveJobComponent,
    SearchBarComponent,
    SearchBarFilterComponent,
    RemoteokComponent,
    RemoteokFormComponent,
    IndeedComponent,
    IndeedPaginationComponent,
    IndeedResultComponent,
    HomeComponent,
  ],
  imports: [CommonModule, JobsRoutingModule],
  exports: [],
})
export class JobsModule {}
