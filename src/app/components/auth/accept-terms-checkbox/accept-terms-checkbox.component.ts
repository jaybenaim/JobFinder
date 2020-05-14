import { Component, OnInit, Input } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { LoginComponent } from "../login/login.component";

@Component({
  selector: "app-accept-terms-checkbox",
  templateUrl: "./accept-terms-checkbox.component.html",
  styleUrls: ["./accept-terms-checkbox.component.css"],
})
export class AcceptTermsCheckboxComponent implements OnInit {
  @Input("hasAcceptedTerms")
  hasAcceptedTerms: boolean = false;
  constructor(private auth: AuthService, private login: LoginComponent) {}

  handleCheckbox(value: boolean) {
    console.log(value);
    this.login.acceptTerms();
  }
  ngOnInit(): void {}
}
