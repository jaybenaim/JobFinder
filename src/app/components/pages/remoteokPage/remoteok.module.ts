import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RemoteokFormComponent } from "./remoteok-form/remoteok-form.component";
import { RemoteokComponent } from "./remoteok/remoteok.component";

@NgModule({
  declarations: [RemoteokComponent, RemoteokFormComponent],
  imports: [CommonModule],
  exports: [],
})
export class RemoteokModule {}
