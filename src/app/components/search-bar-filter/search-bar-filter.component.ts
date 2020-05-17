import { Component, OnInit, Input } from "@angular/core";
import { SearchBarComponent } from "../search-bar/search-bar.component";

@Component({
  selector: "app-search-bar-filter",
  templateUrl: "./search-bar-filter.component.html",
  styleUrls: ["./search-bar-filter.component.css"],
})
export class SearchBarFilterComponent implements OnInit {
  @Input("filter")
  filter: string = "";

  constructor(public searchBar: SearchBarComponent) {}

  ngOnInit(): void {}
}
