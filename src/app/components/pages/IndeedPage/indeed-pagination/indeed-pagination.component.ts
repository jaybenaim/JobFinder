import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-indeed-pagination",
  templateUrl: "./indeed-pagination.component.html",
  styleUrls: ["./indeed-pagination.component.css"],
})
export class IndeedPaginationComponent implements OnInit {
  constructor() {}
  @Input()
  props: {
    previousPage: Function;
    nextPage: Function;
    selectPage: Function;
    query: string;
  };

  previousPage() {
    this.props.previousPage();
  }
  nextPage() {
    this.props.nextPage();
  }
  selectPage(page) {
    this.props.selectPage(page);
  }
  getActivePageClass(page) {
    let startAt = this.props.query["page"];
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
