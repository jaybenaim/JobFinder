import { Component, OnInit, Input } from "@angular/core";
import { SearchLinkedInService } from "src/app/services/search-linked-in.service";

@Component({
  selector: "app-linked-in-form",
  templateUrl: "./linked-in-form.component.html",
  styleUrls: ["./linked-in-form.component.css"],
})
export class LinkedInFormComponent implements OnInit {
  query: string = "";

  // constructor() {}
  constructor(private _linkedIn: SearchLinkedInService) {}

  @Input()
  searchJobsFromLinkedIn: Function;

  handleSearchQuery(value) {
    this.query = value;
  }
  searchJobs(event) {
    event.preventDefault();

    // this.searchJobsFromLinkedIn(this.query);
  }

  ngOnInit(): void {}
}
