import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-indeed-result",
  templateUrl: "./indeed-result.component.html",
  styleUrls: ["./indeed-result.component.css"],
})
export class IndeedResultComponent implements OnInit {
  @Input()
  position: any;

  constructor() {}

  ngOnInit(): void {}
}
