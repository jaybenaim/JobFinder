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

  methods: Array<any> = ["Email", "Facebook", "Twitter", "Github", "Google"];

  constructor(public login: LoginComponent) {}

  handleLoginMethodSelection(value: string) {
    this.login.handleLoginMethodSelection(value);
  }
  getValue() {
    return this.login.selection;
  }
  ngOnInit(): void {}
}
