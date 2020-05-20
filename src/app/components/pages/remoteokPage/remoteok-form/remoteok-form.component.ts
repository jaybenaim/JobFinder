import { Component, OnInit, Input } from "@angular/core";
import { RemoteokComponent } from "../remoteok/remoteok.component";

@Component({
  selector: "app-remoteok-form",
  templateUrl: "./remoteok-form.component.html",
  styleUrls: ["./remoteok-form.component.css"],
})
export class RemoteokFormComponent implements OnInit {
  @Input()
  isLoading: boolean = false;
  query: string = "";
  allJobs: object;

  constructor(private _remoteOk: RemoteokComponent) {}

  ngOnInit(): void {}

  handleSearchQuery(event) {
    let value = event.target.value;
    this.query = value;
  }
  searchJobsFromRemoteok(event, query) {
    event.preventDefault();
    this._remoteOk.searchJobsFromRemoteok(query);
  }
}
