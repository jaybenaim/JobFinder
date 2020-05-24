import { Component, OnInit } from "@angular/core";
import { JobService } from "src/app/services/job.service";

@Component({
  selector: "app-linked-in",
  templateUrl: "./linked-in.component.html",
  styleUrls: ["./linked-in.component.css"],
})
export class LinkedInComponent implements OnInit {
  positions: any[] = [];

  constructor(private jobs: JobService) {}

  minimize() {
    this.positions = [];
  }
  getJobsFromLinkedIn() {
    this.jobs.getJobsFromLinkedIn().subscribe(
      (data) => {
        let positions = data["positions"].map((p: any, i: number) => p);
        this.positions = positions;
      },
      (err) => console.log(err)
    );
  }
  ngOnInit(): void {}
}
