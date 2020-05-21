import { Component, OnInit } from "@angular/core";
import { SearchIndeedService } from "src/app/services/search-indeed.service";

@Component({
  selector: "app-indeed-pagination",
  templateUrl: "./indeed-pagination.component.html",
  styleUrls: ["./indeed-pagination.component.css"],
})
export class IndeedPaginationComponent implements OnInit {
  constructor(public indeedSearch: SearchIndeedService) {}

  previousPage() {
    this.indeedSearch.previousPage();
  }
  nextPage() {
    this.indeedSearch.nextPage();
  }
  selectPage(page) {
    this.indeedSearch.selectPage(page);
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
