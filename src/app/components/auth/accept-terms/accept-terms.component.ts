import { Component, OnInit, Input } from "@angular/core";
import { LoginComponent } from "../login/login.component";

@Component({
  selector: "app-accept-terms",
  templateUrl: "./accept-terms.component.html",
  styleUrls: ["./accept-terms.component.css"],
})
export class AcceptTermsComponent implements OnInit {
  @Input("selection")
  selection: string = "";

  constructor(public login: LoginComponent) {}

  handleLoginMethodSelection(value: any) {
    this.login.handleLoginMethodSelection(value);
  }
  getValue() {
    return this.selection;
  }
  ngOnInit(): void {}
}
