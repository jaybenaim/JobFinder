import { Component, OnInit } from "@angular/core";
import { JobService } from "../../services/job.service";

@Component({
  selector: "app-blank",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  jobList: any[] = [];
  positions: any[] = [];
  tags: any[] = [];
  locations: any[] = [];
  categories: any[] = [];
  siteName: string = "";
  description: string = "";
  showPositions: boolean = false;

  constructor(private jobs: JobService) {}

  getJobsFromFirebase() {
    this.jobs.getJobsFromFirebase().subscribe(
      (data) => {
        // Extract the object from its id
        Object.keys(data).forEach((key: Extract<keyof typeof data, string>) => {
          const item = data[key];
          this.jobList.push(item);
        });
      },
      (err) => {
        alert("Something went wrong");
      }
    );
  }

  getJobsFromRemoteok() {
    this.jobs.getJobsFromRemoteok().subscribe(
      (data) => {
        this.positions.push(data["positions"]);
        this.tags.push(data["tags"]);
        this.locations.push(data["locations"]);
        this.categories.push(data["categories"]);
        this.siteName = data["siteName"];
        this.description = data["description"];
      },
      (err) => {
        alert("Something went wrong");
      }
    );
  }
  toggleShowPositions() {
    this.showPositions = !this.showPositions;
  }
  ngOnInit() {}
}
