import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: "root",
})
export class SaveJobService {
  constructor(private http: HttpClient, private _auth: AuthService) {}
  endpoint = "https://jobfinder-95e75.firebaseio.com/";

  saveJob(job) {
    console.log(this._auth.getUser());
    // save job to firebase user
    let userId = this._auth.getUser().uid;

    return this.http.post(
      this.endpoint + "users/" + userId + "/savedJobs.json",
      job
    );
  }
}
