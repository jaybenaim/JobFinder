import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HomeComponent } from "./home.component";
import { HomeRoutingModule } from "./home-routing.module";
import { SavedJobsComponent } from "../../jobs/saved-jobs/saved-jobs.component";
import { AllJobsComponent } from "../../jobs/all-jobs/all-jobs.component";
import { SearchBarComponent } from "../search-bar/search-bar.component";

@NgModule({
  declarations: [HomeComponent, SavedJobsComponent, SearchBarComponent],
  imports: [CommonModule, HomeRoutingModule],
  exports: [SavedJobsComponent, SearchBarComponent],
})
export class HomeModule {}
