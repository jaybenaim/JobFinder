import { Component, OnInit } from "@angular/core";
import { JobService } from "src/app/services/job.service";

@Component({
  selector: "app-indeed",
  templateUrl: "./indeed.component.html",
  styleUrls: ["./indeed.component.css"],
})
export class IndeedComponent implements OnInit {
  positions: any;
  query: object = {
    type: "",
    salary: "",
    city: "",
    province: "",
    page: 20,
  };
  isLoading: boolean = false;

  constructor(private jobService: JobService) {}

  nextPage() {
    this.positions = [];
    this.isLoading = true;
    this.query["page"] += 20;
    this.searchJobsFromIndeed({ preventDefault: () => null });
  }
  getValue(value) {
    return this.query[value];
  }

  handleSearchQuery(event) {
    let name = event.target.name;
    let value = event.target.value;

    this.query[`${name}`] = value;
  }

  searchJobsFromIndeed(event) {
    event.preventDefault();
    this.isLoading = true;

    let query = this.query;
    this.jobService.searchJobsFromIndeed(query).subscribe(
      (data) => {
        let positions = data["positions"];
        let last20Positions = positions.slice(
          positions.length - 20,
          positions.length - 1
        );
        this.positions = last20Positions;
        this.isLoading = false;

        console.log(this.positions);
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
