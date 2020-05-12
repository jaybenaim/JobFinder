import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HomeComponent } from "./home.component";
import { HomeRoutingModule } from "./home-routing.module";
import { RemoteokComponent } from "../remoteok/remoteok.component";
import { SavedJobsComponent } from "../saved-jobs/saved-jobs.component";
import { AllJobsComponent } from "../../components/all-jobs/all-jobs.component";

@NgModule({
  declarations: [
    HomeComponent,
    RemoteokComponent,
    SavedJobsComponent,
    AllJobsComponent,
  ],
  imports: [CommonModule, HomeRoutingModule],
  exports: [RemoteokComponent, SavedJobsComponent, AllJobsComponent],
})
export class HomeModule {}
