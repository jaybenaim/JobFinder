import { Component, OnInit, Input } from "@angular/core";
import { JobService } from "src/app/services/job.service";

@Component({
  selector: "app-remoteok",
  templateUrl: "./remoteok.component.html",
  styleUrls: ["./remoteok.component.css"],
})
export class RemoteokComponent implements OnInit {
  positions: any[] = [];
  tags: any[] = [];
  locations: any[] = [];
  categories: any[] = [];
  siteName: string = "";
  description: string = "";
  showPositions: boolean = false;
  showTags: boolean = false;
  showlocations: boolean = false;
  showCategories: boolean = false;

  constructor(private jobs: JobService) {}

  minimize() {
    this.positions = [];
  }
  getJobsFromRemoteok() {
    this.jobs.getAllJobs().subscribe(
      (data) => {
        this.positions.push(data["remoteok"]["positions"]);
        this.tags.push(data["remoteok"]["tags"]);
        this.locations.push(data["remoteok"]["locations"]);
        this.categories.push(data["remoteok"]["categories"]);
        this.siteName = data["remoteok"]["siteName"];
        this.description = data["remoteok"]["description"];
      },
      (err) => {
        alert("Something went wrong");
      }
    );
  }
  toggleShowItem(item) {
    this[`show${item}`] = !this[`show${item}`];
  }
  ngOnInit(): void {}
}
