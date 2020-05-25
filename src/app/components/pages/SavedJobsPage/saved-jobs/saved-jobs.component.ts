import { Component, OnInit } from "@angular/core";
import { SaveJobService } from "src/app/services/save-job.service";

@Component({
  selector: "app-saved-jobs",
  templateUrl: "./saved-jobs.component.html",
  styleUrls: ["./saved-jobs.component.css"],
})
export class SavedJobsComponent implements OnInit {
  allJobs: any;
  filteredJobs: any;
  jobId: string;
  confirmedDelete: boolean = false;

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

        this.allJobs = jobs;
        this.filteredJobs = jobs;
      },
      (err) => console.log(err)
    );
  }
  removeJob() {
    this._jobService.removeJob(this.jobId).subscribe(
      (data) => {
        this.getSavedJobs();
        this.confirmedDelete = false;
      },
      (err) => console.log(err)
    );
  }
  confirmDelete(id) {
    this.confirmedDelete = true;
    this.jobId = id;
  }
  filterJobs(filter) {
    if (filter === "allJobs") {
      this.filteredJobs = this.allJobs;
    } else {
      this.filteredJobs = this.allJobs.filter((job: object) =>
        job["link"].includes(filter)
      );
    }
  }

  ngOnInit(): void {
    this.getSavedJobs();
  }
}
