import { Component, OnInit } from "@angular/core";
import { JobService } from "src/app/services/job.service";

@Component({
  selector: "app-search-bar",
  templateUrl: "./search-bar.component.html",
  styleUrls: ["./search-bar.component.css"],
})
export class SearchBarComponent implements OnInit {
  query: string = "";
  results: any[] = [];
  allJobs: any[] = [];

  constructor(private jobs: JobService) {}

  handleSearch(e) {
    this.query = e.target.value.toLowerCase();
    console.log(this.allJobs);
    let positionTitles = this.allJobs[0]["positions"].map((job) =>
      job.map((position) => position.title)
    );

    let filteredJobs = positionTitles[0].filter((job) =>
      job.toLowerCase().includes(this.query)
    );
    this.query.length <= 1
      ? (this.results = [])
      : (this.results = filteredJobs);
  }

  getJobs() {
    this.jobs.getAllJobs().subscribe(
      (data) => {
        this.allJobs.push(data);
      },
      (err) => {
        console.log(err);
        alert("Something went wrong");
      }
    );
  }
  ngOnInit(): void {
    this.getJobs();
  }
}
