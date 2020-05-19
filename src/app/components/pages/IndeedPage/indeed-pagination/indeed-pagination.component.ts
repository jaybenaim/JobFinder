import { Component, OnInit } from "@angular/core";
import { IndeedComponent } from "../indeed/indeed.component";
import { start } from "repl";

@Component({
  selector: "app-indeed-pagination",
  templateUrl: "./indeed-pagination.component.html",
  styleUrls: ["./indeed-pagination.component.css"],
})
export class IndeedPaginationComponent implements OnInit {
  constructor(public indeedSearch: IndeedComponent) {}

  previousPage() {
    this.indeedSearch.previousPage();
  }

  nextPage() {
    this.indeedSearch.nextPage();
  }
  getActivePageClass(page) {
    let startAt = this.indeedSearch.query["page"];
    let pageNumber = startAt == 20 ? 1 : String(startAt / 20);
    let result = "";

    if (page == pageNumber) {
      result = "page-item active";
    } else {
      result = "page-item";
    }
    // only show 6 page options for mobile
    if (page >= 7) {
      result = result + " mobile-disabled";
    }
    return result;
  }
  ngOnInit(): void {}
}
