import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class SearchLinkedInService {
  endpoint = !window.location.host.includes("local")
    ? "https://job-finder-web-scraper.herokuapp.com"
    : "http://localhost:3001";

  constructor(private http: HttpClient) {}

  getJobsFromLinkedIn() {
    return this.http.get(this.endpoint + "/api/jobs/linked-in");
  }
  searchJobsFromLinkedIn(query) {
    return this.http.post(this.endpoint + "/api/jobs/linked-in", { query });
  }
}
