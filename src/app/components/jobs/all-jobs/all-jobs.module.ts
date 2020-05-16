import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AllJobsRoutingModule } from "./all-jobs-routing.module";

import { LinkedInComponent } from "../linked-in/linked-in.component";
import { IndeedComponent } from "../indeed/indeed.component";
import { RemoteokComponent } from "../remoteok/remoteok.component";
import { AllJobsComponent } from "./all-jobs.component";

@NgModule({
  declarations: [
    AllJobsComponent,
    RemoteokComponent,
    IndeedComponent,
    LinkedInComponent,
  ],
  imports: [CommonModule, AllJobsRoutingModule],
  exports: [],
})
export class AllJobsModule {}
