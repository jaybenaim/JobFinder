import { Component, OnInit } from "@angular/core";
import { JobService } from "src/app/services/job.service";

@Component({
  selector: "app-search-bar",
  templateUrl: "./search-bar.component.html",
  styleUrls: ["./search-bar.component.css"],
})
export class SearchBarComponent implements OnInit {
  query: string = "";
  allJobs: any[] = [];
  results: any;
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
  filterResults = (filters: any, results: any) => {
    // get active filters
    for (let filter in filters) {
      let convertedFilterName = `${filter}Results`;
      let result = results[convertedFilterName];
      let query = this.query.toLowerCase();

      if (filter === "positions" && filters[filter]) {
        this.results[
          convertedFilterName
        ] = result.filter((item: { title: string }) =>
          item.title.toLowerCase().includes(query)
        );
      }
      if (filter === "locations" && filters[filter]) {
        this.results[convertedFilterName] = result.filter((location: string) =>
          location.toLowerCase().includes(query)
        );
      }
      if (filter === "categories" && filters[filter]) {
        this.results[convertedFilterName] = result.filter((category: string) =>
          category.toLowerCase().includes(query)
        );
      }
      if (filter === "websites" && filters[filter]) {
        this.results[convertedFilterName] = result.filter((siteName: string) =>
          siteName.toLowerCase().includes(query)
        );
      }
    }

    console.log(this.results);
  };

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
    this.results = res;
    this.filterResults(this.filters, this.results);
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
