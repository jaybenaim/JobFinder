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
  results = {
    positionsResults: [],
    locationsResults: [],
    categoriesResults: [],
    tagsResults: [],
    websitesResults: [],
  };
  filters = {
    positions: false,
    locations: false,
    categories: false,
    tags: false,
    websites: false,
  };
  filter: boolean = false;

  constructor(private jobs: JobService) {}
  resetResults() {
    this.results = {
      positionsResults: [],
      locationsResults: [],
      categoriesResults: [],
      tagsResults: [],
      websitesResults: [],
    };
  }
  setFilter(e) {
    this.filters[e.name] = !this.filters[e.name];
    this.handleSearch(this.query);
  }
  getFilter() {
    return this.filters;
  }
  filterResults = (filters: any, results: any) => {
    // get active filters
    let activeFilters = [];

    if (activeFilters.length === 0) {
      this.resetResults();
    }
    for (let filter in filters) {
      let convertedFilterName = `${filter}Results`;
      let result = results[convertedFilterName];
      let query = this.query.toLowerCase();

      // resest filters when checkbox is off
      filters[filter] && activeFilters.push(filters[filter]);

      if (filter === "positions" && filters[filter]) {
        this.results[
          convertedFilterName
        ] = result.filter((item: { title: string }) =>
          item.title.toLowerCase().includes(query)
        );
      }
      if (filter === "locations" && filters[filter]) {
        this.results[convertedFilterName] = result.filter(
          (position: any) =>
            position.location.toLowerCase().includes(query) &&
            position.location !== ""
        );
      }
      if (filter === "categories" && filters[filter]) {
        this.results[convertedFilterName] = result.filter((category: string) =>
          category.toLowerCase().includes(query)
        );
      }
      if (filter === "tags" && filters[filter]) {
        let tags = [];

        for (let item of result) {
          let filteredTags = item.tags.filter((tag) => tag.includes(query));
          filteredTags.length >= 1 &&
            tags.push({ link: item.link, tags: filteredTags });
        }
        this.results[convertedFilterName] = tags;
      }
      if (filter === "websites" && filters[filter]) {
        this.results[convertedFilterName] = result.filter((siteName: string) =>
          siteName.toLowerCase().includes(query)
        );
      }
    }
  };

  handleSearch(e) {
    this.query = e.toLowerCase();
    let positions = this.allJobs[0]["positions"];
    let tags = [];
    let locations = [];

    let newPositions = positions.map((position) => {
      position.location &&
        locations.push({
          title: position.title,
          link: position.link,
          location: position.location,
        });
      position.tags &&
        tags.push({
          link: position.link,
          tags: position.tags,
        });
      return position;
    });

    let jobList = {
      positions: newPositions,
      locations: locations,
      categories: this.allJobs[0]["categories"],
      tags: tags,
      websites: this.allJobs[0]["siteNames"],
    };

    for (let filter in this.filters) {
      let r = `${filter}Results`;
      if (this.filters[filter]) {
        this.results[r] = jobList[filter];
      }
    }
    this.filterResults(this.filters, this.results);
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
