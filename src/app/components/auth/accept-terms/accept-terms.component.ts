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
    handleLoginMethodSelection: Function;
  };

  constructor() {}

  handleLoginMethodSelection(value: any) {
    this.props.handleLoginMethodSelection(value);
  }
  getValue() {
    return this.props.selection;
  }
  ngOnInit(): void {}
}
