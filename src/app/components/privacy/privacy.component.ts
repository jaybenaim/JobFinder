import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-privacy",
  templateUrl: "./privacy.component.html",
  styleUrls: ["./privacy.component.css"],
})
export class PrivacyComponent implements OnInit {
  showCompletePolicy: boolean = false;

  constructor() {}

  toggleShowCompletePolicy() {
    this.showCompletePolicy = !this.showCompletePolicy;
  }
  ngOnInit(): void {}
}
