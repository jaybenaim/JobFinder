import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HomeComponent } from "./home.component";
import { HomeRoutingModule } from "./home-routing.module";
import { SavedJobsComponent } from "../SavedJobsPage/saved-jobs/saved-jobs.component";
import { SearchBarComponent } from "../../search-bar/search-bar.component";
import { SearchBarFilterComponent } from "../../search-bar-filter/search-bar-filter.component";

@NgModule({
  declarations: [
    HomeComponent,
    SavedJobsComponent,
    SearchBarComponent,
    SearchBarFilterComponent,
  ],
  imports: [CommonModule, HomeRoutingModule],
  exports: [SavedJobsComponent],
})
export class HomeModule {}
