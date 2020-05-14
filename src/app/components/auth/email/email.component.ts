import { Component, OnInit, Input } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { Router } from "@angular/router";
import { AcceptTermsCheckboxComponent } from "../accept-terms-checkbox/accept-terms-checkbox.component";

@Component({
  selector: "app-email",
  templateUrl: "./email.component.html",
  styleUrls: ["./email.component.css"],
})
export class EmailComponent implements OnInit {
  user = {
    email: "",
    password: "",
  };
  @Input("hasAcceptedTerms")
  hasAcceptedTerms: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  isChecked() {
    return this.hasAcceptedTerms;
  }
  redirect() {
    return this.authService.isLoggedIn() && this.router.navigate(["/"]);
  }

  signInWithEmail() {
    this.authService
      .signInRegular(this.user.email, this.user.password)
      .then((res) => {
        this.redirect();
      })
      .catch((err) => {
        console.log(err.code);
        if (err.code === "auth/wrong-password") alert(err.message);

        if (err.code === "auth/user-not-found")
          alert("No user with that username exists.");
      });
  }
  ngOnInit(): void {}
}
