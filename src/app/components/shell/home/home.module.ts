﻿import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HomeComponent } from "./home.component";
import { HomeRoutingModule } from "./home-routing.module";
import { SavedJobsComponent } from "../../jobs/saved-jobs/saved-jobs.component";
import { SearchBarComponent } from "../../search-bar/search-bar.component";
import { SearchBarFilterComponent } from "../../search-bar-filter/search-bar-filter.component";
import { SearchBarResultComponent } from "../../search-bar-result/search-bar-result.component";

@NgModule({
  declarations: [
    HomeComponent,
    SavedJobsComponent,
    SearchBarComponent,
    SearchBarFilterComponent,
    SearchBarResultComponent,
  ],
  imports: [CommonModule, HomeRoutingModule],
  exports: [SavedJobsComponent],
})
export class HomeModule {}
