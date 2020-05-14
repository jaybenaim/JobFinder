import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HomeComponent } from "./home.component";
import { HomeRoutingModule } from "./home-routing.module";
import { RemoteokComponent } from "../../jobs/remoteok/remoteok.component";
import { SavedJobsComponent } from "../../jobs/saved-jobs/saved-jobs.component";
import { AllJobsComponent } from "../../jobs/all-jobs/all-jobs.component";
import { SearchBarComponent } from "../search-bar/search-bar.component";

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
