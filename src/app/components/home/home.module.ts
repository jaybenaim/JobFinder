import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HomeComponent } from "./home.component";
import { HomeRoutingModule } from "./home-routing.module";
import { RemoteokComponent } from "../remoteok/remoteok.component";

@NgModule({
  declarations: [HomeComponent, RemoteokComponent],
  imports: [CommonModule, HomeRoutingModule],
  exports: [RemoteokComponent],
})
export class HomeModule {}
