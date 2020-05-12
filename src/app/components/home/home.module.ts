import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HomeComponent } from "./home.component";
import { HomeRoutingModule } from "./home-routing.module";
import { RemoteokComponent } from "../remoteok/remoteok.component";
import { SavedJobsComponent } from "../saved-jobs/saved-jobs.component";
import { AllJobsComponent } from "../../components/all-jobs/all-jobs.component";
import { SearchBarComponent } from "../../components/search-bar/search-bar.component";

@NgModule({
  declarations: [
    HomeComponent,
    RemoteokComponent,
    SavedJobsComponent,
    AllJobsComponent,
    SearchBarComponent,
  ],
  imports: [CommonModule, HomeRoutingModule],
  exports: [
    RemoteokComponent,
    SavedJobsComponent,
    AllJobsComponent,
    SearchBarComponent,
  ],
})
export class HomeModule {}
