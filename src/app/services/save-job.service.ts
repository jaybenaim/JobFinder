import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: "root",
})
export class SaveJobService {
  constructor(private http: HttpClient, private _auth: AuthService) {}
  endpoint = "https://jobfinder-95e75.firebaseio.com/";
  userId = this._auth.getUser() !== null ? this._auth.getUser().uid : "guest";

  saveJob(job) {
    // save job to firebase user
    return this.http.post(
      this.endpoint + "users/" + this.userId + "/savedJobs.json",
      job
    );
  }
  removeJob(id) {
    return this.http.delete(
      this.endpoint + "users/" + this.userId + "/savedJobs/" + id + ".json"
    );
  }
  getSavedJobs() {
    return this.http.get(
      this.endpoint + "users/" + this.userId + "/savedJobs.json"
    );
  }
}
