import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class SearchRemoteokService {
  remoteJobs: any;

  constructor(private http: HttpClient) {}
  endpoint = !window.location.host.includes("local")
    ? "https://job-finder-web-scraper.herokuapp.com"
    : "http://localhost:3001";

  searchJobsFromRemoteok(query) {
    // get jobs from remoteok
    return this.http.post(this.endpoint + "/api/jobs/remoteok", { query });
  }
}
