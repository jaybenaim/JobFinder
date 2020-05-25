import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class SearchLinkedInService {
  constructor(private http: HttpClient) {}
  endpoint = "https://job-finder-web-scraper.herokuapp.com";

  getJobsFromLinkedIn() {
    return this.http.get(this.endpoint + "/api/jobs/linked-in");
  }
  searchJobsFromLinkedIn(query) {
    return this.http.post(this.endpoint + "/api/jobs/linked-in", { query });
  }
}
