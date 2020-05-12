import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  hideAll: boolean = false;

  constructor() {}

  hideJobs() {
    this.setHideAll();
  }
  setHideAll() {
    this.hideAll = !this.hideAll;
  }

  ngOnInit() {}
}
