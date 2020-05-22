import { Component, OnInit, Input } from "@angular/core";
import { LoginComponent } from "../login/login.component";

@Component({
  selector: "app-accept-terms",
  templateUrl: "./accept-terms.component.html",
  styleUrls: ["./accept-terms.component.css"],
})
export class AcceptTermsComponent implements OnInit {
  @Input()
  props: {
    selection: string;
    acceptTerms: Function;
    checkIfUserAcceptedTerms: Function;
  };

  constructor(public login: LoginComponent) {}

  handleLoginMethodSelection(value: any) {
    this.login.handleLoginMethodSelection(value);
  }
  getValue() {
    return this.props.selection;
  }
  ngOnInit(): void {}
}
