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
        this.jobList.push(data);
        console.log(data);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  ngOnInit() {}
}
