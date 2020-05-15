import { Component, OnInit } from "@angular/core";
import { JobService } from "../../../services/job.service";

@Component({
  selector: "app-all-jobs",
  templateUrl: "./all-jobs.component.html",
  styleUrls: ["./all-jobs.component.css"],
})
export class AllJobsComponent implements OnInit {
  positions: any[] = [];

  constructor(private jobs: JobService) {}

  minimize() {
    this.positions = [];
  }

  getAllJobs() {
    this.jobs.getAllJobs().subscribe(
      (data) => {
        let positions = data["positions"];
        let results = [];
        for (let key in positions) {
          let value = positions[key];
          results.push({
            title: value.title,
            link: value.link,
            salary: value.salary,
            requirements: value.requirements,
          });
        }

        this.positions = results;
      },
      (err) => {
        console.log(err);
        alert("Something went wrong ");
      }
    );
  }

  ngOnInit(): void {}
}
