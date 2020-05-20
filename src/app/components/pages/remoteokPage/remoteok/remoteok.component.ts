import { Component, OnInit, Input } from "@angular/core";
import { JobService } from "src/app/services/job.service";
import { SearchRemoteokService } from "src/app/services/search-remoteok.service";

@Component({
  selector: "app-remoteok",
  templateUrl: "./remoteok.component.html",
  styleUrls: ["./remoteok.component.css"],
})
export class RemoteokComponent implements OnInit {
  positions: any[] = [];
  tags: any[] = [];
  categories: any[] = [];
  siteName: string = "";
  description: string = "";
  showPositions: boolean = false;
  showTags: boolean = false;
  showlocations: boolean = false;
  showCategories: boolean = false;
  isLoading: boolean = false;

  constructor(
    private _jobService: JobService,
    private _searchRemote: SearchRemoteokService
  ) {}

  minimize() {
    this.positions = [];
  }
  getJobsFromRemoteok() {
    this._jobService.getAllJobs().subscribe(
      (data) => {
        this.positions.push(data["remoteok"]["positions"]);
        this.tags.push(data["remoteok"]["tags"]);
        this.categories.push(data["remoteok"]["categories"]);
        this.siteName = data["remoteok"]["siteName"];
        this.description = data["remoteok"]["description"];
      },
      (err) => {
        console.log(err);
        alert("Something went wrong");
      }
    );
  }
  searchJobsFromRemoteok(query) {
    this.isLoading = true;

    this._searchRemote.searchJobsFromRemoteok(query).subscribe(
      (data) => {
        this.isLoading = false;

        this.positions = data["positions"];
        this.tags = data["tags"];
        this.categories = data["categories"];
        let sitename = data["siteName"];
        sitename = sitename.slice(0, sitename.indexOf("jobwork") + 3);
        this.siteName = sitename.replace("®", "® - ");
        this.description = data["description"];
      },
      (err) => console.log(err)
    );
  }
  toggleShowItem(item) {
    this[`show${item}`] = !this[`show${item}`];
  }
  ngOnInit(): void {}
}
