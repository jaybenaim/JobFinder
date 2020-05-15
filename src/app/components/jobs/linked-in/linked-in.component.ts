import { Component, OnInit } from "@angular/core";
import { JobService } from "src/app/services/job.service";

@Component({
  selector: "app-linked-in",
  templateUrl: "./linked-in.component.html",
  styleUrls: ["./linked-in.component.css"],
})
export class LinkedInComponent implements OnInit {
  constructor(private jobs: JobService) {}

  getJobsFromLinkedIn() {
    this.jobs.getJobsFromLinkedIn().subscribe(
      (data) => console.log(data),
      (err) => console.log(err)
    );
  }
  ngOnInit(): void {}
}
