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
    if (page == pageNumber) {
      return "page-item active";
    } else {
      return "page-item";
    }
  }
  ngOnInit(): void {}
}
