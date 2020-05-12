import { Component, OnInit } from "@angular/core";
import { JobService } from "../../services/job.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  allJobs: any[] = [];

  hideAll: boolean = false;

  constructor(private jobs: JobService) {}

  hideJobs() {
    this.allJobs = [];
    this.setHideAll();
  }
  setHideAll() {
    this.hideAll = !this.hideAll;
  }
  getAllJobs() {
    this.jobs.getAllJobs().subscribe(
      (data) => {
        this.allJobs.push(data);
      },
      (err) => {
        alert("Something went wrong ");
      }
    );
  }

  ngOnInit() {}
}
