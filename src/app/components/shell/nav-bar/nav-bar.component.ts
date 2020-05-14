import { Component, OnInit } from "@angular/core";
import { Location } from "@angular/common";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.css"],
})
export class NavBarComponent implements OnInit {
  skipLinkPath: string;
  showAccount: boolean = false;

  constructor(private location: Location, public authService: AuthService) {}

  toggleShowAccount() {
    this.showAccount = !this.showAccount;
  }

  ngOnInit() {
    this.skipLinkPath = `${this.location.path()}#mainContent`;
  }
}
