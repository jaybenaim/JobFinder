import { Component, OnInit } from "@angular/core";
import { JobService } from "../../services/job.service";

@Component({
  selector: "app-blank",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  jobList: any[] = [];

  constructor(private jobs: JobService) {}

  getJobs() {
    this.jobs.getJobs().subscribe(
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

  ngOnInit() {}
}
