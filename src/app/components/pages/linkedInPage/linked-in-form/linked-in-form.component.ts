import { Component, OnInit } from "@angular/core";
import { SearchLinkedInService } from "src/app/services/search-linked-in.service";

@Component({
  selector: "app-linked-in-form",
  templateUrl: "./linked-in-form.component.html",
  styleUrls: ["./linked-in-form.component.css"],
})
export class LinkedInFormComponent implements OnInit {
  query: string = "";
  isLoading: boolean = false;

  constructor(private _linkedIn: SearchLinkedInService) {}
  handleSearchQuery(value) {
    this.query = value;
  }
  searchJobsFromLinkedIn(event) {
    event.preventDefault();
    this.isLoading = true;

    this._linkedIn.searchJobsFromLinkedIn(this.query).subscribe(
      (data) => {
        this.isLoading = false;

        console.log(data);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  ngOnInit(): void {}
}
