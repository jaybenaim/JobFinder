import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IndeedComponent } from "./indeed/indeed.component";
import { IndeedPaginationComponent } from "./indeed-pagination/indeed-pagination.component";
import { IndeedResultComponent } from "./indeed-result/indeed-result.component";
import { SaveJobComponent } from "../../save-job/save-job.component";

@NgModule({
  declarations: [
    IndeedComponent,
    IndeedPaginationComponent,
    IndeedResultComponent,
    SaveJobComponent,
  ],
  imports: [CommonModule],
  exports: [],
})
export class IndeedModule {}
