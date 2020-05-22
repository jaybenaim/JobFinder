import { Component, OnInit } from "@angular/core";
import { SearchIndeedService } from "src/app/services/search-indeed.service";

@Component({
  selector: "app-indeed",
  templateUrl: "./indeed.component.html",
  styleUrls: ["./indeed.component.css"],
})
export class IndeedComponent implements OnInit {
  positions: any;
  query: object = {
    type: "",
    salary: "",
    city: "",
    province: "",
    page: 20,
  };
  isLoading: boolean = false;

  constructor(private _indeedSearch: SearchIndeedService) {}
  props = {
    previousPage: this.previousPage,
    nextPage: this.nextPage,
    selectPage: this.selectPage,
    query: this.query,
  };
  getValue(value) {
    return this.query[value];
  }

  handleSearchQuery(event) {
    let name = event.target.name;
    let value = event.target.value;

    this.query[`${name}`] = value;
  }
  previousPage() {
    this.clearPositions;
    this.isLoading = true;
    this.query["page"] > 20
      ? (this.query["page"] -= 20)
      : (this.query["page"] = 20);
    this.searchJobsFromIndeed(this.query);
  }
  nextPage() {
    this.clearPositions;
    this.isLoading = true;
    this.query["page"] += 20;
    this.searchJobsFromIndeed(this.query);
  }
  selectPage(page) {
    this.clearPositions;
    this.isLoading = true;
    this.query["page"] = page * 20;
    this.searchJobsFromIndeed(this.query);
  }
  clearPositions() {
    this.positions = [];
  }
  searchJobsFromIndeed(event) {
    event.preventDefault();
    this.isLoading = true;

    let query = this.query;
    this._indeedSearch.searchJobsFromIndeed(query).subscribe(
      (data) => {
        let positions = data["positions"];
        let last20Positions = positions.slice(
          positions.length - 20,
          positions.length - 1
        );
        this.positions = last20Positions;
        this.isLoading = false;
      },
      (err) => {
        console.log(err);
      }
    );
  }
  ngOnInit(): void {}
}
