import { Component, OnInit, Input } from "@angular/core";
import { LoginComponent } from "../login/login.component";

@Component({
  selector: "app-accept-terms-checkbox",
  templateUrl: "./accept-terms-checkbox.component.html",
  styleUrls: ["./accept-terms-checkbox.component.css"],
})
export class AcceptTermsCheckboxComponent implements OnInit {
  @Input()
  props: {
    acceptTerms: Function;
    checkIfUserAcceptedTerms: Function;
  };
  constructor() {}

  handleCheckbox() {
    this.props.acceptTerms();
  }
  ngOnInit(): void {}
}
