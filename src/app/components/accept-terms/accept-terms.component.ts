import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-accept-terms",
  templateUrl: "./accept-terms.component.html",
  styleUrls: ["./accept-terms.component.css"],
})
export class AcceptTermsComponent implements OnInit {
  selection: string = "";

  constructor() {}

  handleChange(value: string) {
    this.selection = value;
  }
  getValue() {
    return this.selection;
  }
  ngOnInit(): void {}
}
