import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

export interface Job {
  url: string;
}
@Injectable({
  providedIn: "root",
})
export class JobService {
  private jobs: any[] = [];

  constructor(private http: HttpClient) {}
  endpoint = window.location.host.includes("local")
    ? "http://localhost:3001"
    : window.location.origin;

  getJobs() {
    return this.http.get(this.endpoint + "/api/jobs");
  }
}
