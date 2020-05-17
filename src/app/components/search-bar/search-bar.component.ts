import { Component, OnInit } from "@angular/core";
import { JobService } from "src/app/services/job.service";

@Component({
  selector: "app-search-bar",
  templateUrl: "./search-bar.component.html",
  styleUrls: ["./search-bar.component.css"],
})
export class SearchBarComponent implements OnInit {
  query: string = "";
  results: any;
  allJobs: any[] = [];
  filters = {
    positions: false,
    locations: false,
    categories: false,
    tags: false,
    websites: false,
  };
  filter: boolean = false;

  constructor(private jobs: JobService) {}

  setFilter(e) {
    this.filters[e.name] = !this.filters[e.name];
    this.handleSearch(this.query);
  }
  getFilter() {
    return this.filters;
  }
  filterResults = (filter) => {};
  handleSearch(e) {
    this.query = e.toLowerCase();

    let jobList = {
      positions: this.allJobs[0]["positions"],
      locations: this.allJobs[0]["locations"],
      categories: this.allJobs[0]["categories"],
      tags: this.allJobs[0]["tags"],
      websites: this.allJobs[0]["siteNames"],
    };

    const res = {
      positionsResults: [],
      locationsResults: [],
      categoriesResults: [],
      tagsResults: [],
      websitesResults: [],
    };
    for (let filter in this.filters) {
      let r = `${filter}Results`;
      if (this.filters[filter]) {
        res[r] = jobList[filter];
      }
    }
    // todo change backend so you can loop through each as array
    this.results = res;
    console.log(this.results);
    //

    //  / const filteredJobs = [];

    // for (let result in res) {
    //   let originalJobList = jobList[result.replace("Results", "")];
    //   if (res[result].length >= 1) {
    //     switch (result) {
    //       case "positionsResults":
    //         let filteredPositions = originalJobList.filter((r) => {
    //           return r.title.toLowerCase().includes(this.query.toLowerCase());
    //         });
    //         res[result] = filteredPositions;
    //       case "locationsResults":
    //         let locationJobs = [];
    //         for (let job in originalJobList) {
    //           locationJobs.push(originalJobList[job]);
    //         }

    //         let filteredLocations = locationJobs.filter((location) => {
    //           console.log(location);
    //           // return location.toLowerCase().includes(this.query.toLowerCase());
    //         });
    //         res[result] = filteredLocations;
    //         break;
    //       default:
    //         res[result] = originalJobList.filter((r) => {
    //           return r.title.toLowerCase().includes(this.query.toLowerCase());
    //         });
    //     }
    //     this.results = res;
    //     console.log(res);
    //   }
    // }
  }

  filterJobs() {}
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
