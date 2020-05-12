import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class JobService {
  constructor(private http: HttpClient) {}
  endpoint = "https://job-finder-web-scraper.herokuapp.com/";

  getAllJobs() {
    // from backend (scraper)
    console.log(this.endpoint);
    return this.http.get(this.endpoint + "api/jobs");
  }
  getJobsFromFirebase() {
    // from firebaseDB (liked/saved jobs?)
    return this.http.get("https://jobfinder-95e75.firebaseio.com/jobs.json");
  }

  getJobsFromRemoteok() {
    // get jobs from remoteok
    return this.http.get(this.endpoint + "/api/jobs/remoteok");
  }
}
