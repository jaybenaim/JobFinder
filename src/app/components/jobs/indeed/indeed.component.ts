import { Component, OnInit } from "@angular/core";
import { JobService } from "src/app/services/job.service";

@Component({
  selector: "app-indeed",
  templateUrl: "./indeed.component.html",
  styleUrls: ["./indeed.component.css"],
})
export class IndeedComponent implements OnInit {
  constructor(private jobs: JobService) {}

  getJobsFromIndeed() {
    this.jobs.getJobsFromIndeed().subscribe(
      (data) => console.log(data),
      (err) => console.log(err)
    );
  }
  ngOnInit(): void {}
}
