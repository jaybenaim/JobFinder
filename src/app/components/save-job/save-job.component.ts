import { Component, OnInit, Input } from "@angular/core";
import { SaveJobService } from "src/app/services/save-job.service";

@Component({
  selector: "app-save-job",
  templateUrl: "./save-job.component.html",
  styleUrls: ["./save-job.component.css"],
})
export class SaveJobComponent implements OnInit {
  @Input()
  position: object;

  constructor(private saveJobService: SaveJobService) {}

  saveJob(job) {
    this.saveJobService.saveJob(job).subscribe(
      (data) => {
        console.log(data);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  ngOnInit(): void {}
}
