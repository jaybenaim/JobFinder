import { Component, OnInit, Input } from "@angular/core";
import { JobService } from "../../services/job.service";

@Component({
  selector: "app-all-jobs",
  templateUrl: "./all-jobs.component.html",
  styleUrls: ["./all-jobs.component.css"],
})
export class AllJobsComponent implements OnInit {
  @Input("hideAll")
  hideAll: boolean = false;

  allJobs: any[] = [];

  constructor(private jobs: JobService) {}

  getAllJobs() {
    this.jobs.getAllJobs().subscribe(
      (data) => {
        this.allJobs.push(data);
        console.log(this.allJobs[0]["remoteok"]);
      },
      (err) => {
        alert("Something went wrong ");
      }
    );
  }

  ngOnInit(): void {}
}
