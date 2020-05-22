import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class SearchIndeedService {
  constructor(private http: HttpClient) {}

  endpoint = !window.location.host.includes("local")
    ? "https://job-finder-web-scraper.herokuapp.com"
    : "http://localhost:3001";

  getJobsFromIndeed() {
    return this.http.get(this.endpoint + "/api/jobs/indeed");
  }
  searchJobsFromIndeed(query) {
    return this.http.post(this.endpoint + "/api/jobs/indeed", { query });
  }
}
