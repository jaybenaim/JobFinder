import { Component, OnInit } from "@angular/core";
import { SearchLinkedInService } from "src/app/services/search-linked-in.service";

@Component({
  selector: "app-linked-in",
  templateUrl: "./linked-in.component.html",
  styleUrls: ["./linked-in.component.css"],
})
export class LinkedInComponent implements OnInit {
  positions: any;
  isLoading: boolean = false;

  constructor(private _linkedIn: SearchLinkedInService) {}

  minimize() {
    this.positions = [];
  }

  searchJobsFromLinkedIn = (query: string) => {
    this.isLoading = true;

    this._linkedIn.searchJobsFromLinkedIn(query).subscribe(
      (data) => {
        this.isLoading = false;
        this.positions = data["positions"];
      },
      (err) => console.log(err)
    );
  };

  ngOnInit(): void {}
}
