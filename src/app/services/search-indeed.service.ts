import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class SearchIndeedService {
  positions: any;
  query: object = {
    type: "",
    salary: "",
    city: "",
    province: "",
    page: 20,
  };
  isLoading: boolean = false;

  constructor(private http: HttpClient) {}

  endpoint = !window.location.host.includes("local")
    ? "https://job-finder-web-scraper.herokuapp.com"
    : "http://localhost:3001";

  previousPage() {
    this.clearPositions;
    this.isLoading = true;
    this.query["page"] > 20
      ? (this.query["page"] -= 20)
      : (this.query["page"] = 20);
    this.searchJobsFromIndeed({ preventDefault: () => null });
  }
  nextPage() {
    this.clearPositions;
    this.isLoading = true;
    this.query["page"] += 20;
    this.searchJobsFromIndeed({ preventDefault: () => null });
  }
  selectPage(page) {
    this.clearPositions;
    this.isLoading = true;
    this.query["page"] = page * 20;
    this.searchJobsFromIndeed({ preventDefault: () => null });
  }
  clearPositions() {
    this.positions = [];
  }
  getJobsFromIndeed() {
    return this.http.get(this.endpoint + "/api/jobs/indeed");
  }
  searchJobsFromIndeed(query) {
    return this.http.post(this.endpoint + "/api/jobs/indeed", { query });
  }
}
