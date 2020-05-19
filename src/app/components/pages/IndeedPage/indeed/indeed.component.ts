import { Component, OnInit } from "@angular/core";
import { JobService } from "src/app/services/job.service";

@Component({
  selector: "app-indeed",
  templateUrl: "./indeed.component.html",
  styleUrls: ["./indeed.component.css"],
})
export class IndeedComponent implements OnInit {
  positions: any[] = [];
  query: object = {
    type: "",
    salary: "",
    city: "",
    province: "",
  };

  constructor(private jobService: JobService) {}

  getValue(value) {
    return this.query[value];
  }
  handleSearchQuery(event) {
    let name = event.target.name;
    let value = event.target.value;

    this.query[`${name}`] = value;
    console.log(this.query);
  }
  searchJobsFromIndeed(event) {
    event.preventDefault();
    let query = this.query;
    this.jobService.searchJobsFromIndeed(query).subscribe(
      (data) => {
        console.log(data);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  getJobsFromIndeed() {
    this.jobService.getJobsFromIndeed().subscribe(
      (data) => {
        this.positions = data["positions"];
        console.log(data);
      },
      (err) => console.log(err)
    );
  }
  ngOnInit(): void {}
}
