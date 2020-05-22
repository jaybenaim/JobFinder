import { Component, OnInit } from "@angular/core";
import { SaveJobService } from "src/app/services/save-job.service";

@Component({
  selector: "app-saved-jobs",
  templateUrl: "./saved-jobs.component.html",
  styleUrls: ["./saved-jobs.component.css"],
})
export class SavedJobsComponent implements OnInit {
  jobList: any;
  constructor(private _jobService: SaveJobService) {}

  getSavedJobs() {
    let jobs = <any>[];
    this._jobService.getSavedJobs().subscribe(
      (data) => {
        data &&
          Object.keys(data).forEach(
            (key: Extract<keyof typeof data, string>) => {
              const item = data[key];
              item["id"] = key;
              jobs.push(item);
            }
          );

        this.jobList = jobs;
      },
      (err) => console.log(err)
    );
  }
  removeJob(id) {
    this._jobService.removeJob(id).subscribe(
      (data) => {
        this.getSavedJobs();
      },
      (err) => console.log(err)
    );
  }

  ngOnInit(): void {
    this.getSavedJobs();
  }
}
