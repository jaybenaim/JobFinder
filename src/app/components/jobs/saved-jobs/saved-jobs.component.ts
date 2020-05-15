import { Component, OnInit, Input } from "@angular/core";
import { JobService } from "../../../services/job.service";

@Component({
  selector: "app-saved-jobs",
  templateUrl: "./saved-jobs.component.html",
  styleUrls: ["./saved-jobs.component.css"],
})
export class SavedJobsComponent implements OnInit {
  jobList: any;
  constructor(private jobs: JobService) {}

  minimize() {
    this.jobList = [];
  }
  getJobsFromFirebase() {
    let list = <any>[];
    this.jobs.getJobsFromFirebase().subscribe(
      (data) => {
        // Extract the object from its id
        Object.keys(data).forEach((key: Extract<keyof typeof data, string>) => {
          const item = data[key];
          list.push(item);
        });
        this.jobList = list;
      },
      (err) => {
        console.log(err);

        alert("Something went wrong");
      }
    );
  }
  ngOnInit(): void {}
}
