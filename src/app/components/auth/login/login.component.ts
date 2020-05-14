import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  user = {
    email: "",
    password: "",
  };

  selection: string = "";
  constructor(private authService: AuthService, private router: Router) {}

  handleLoginMethodSelection(value: string) {
    this.selection = value;
    // switch handle send to auth method
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

  signInWithTwitter() {
    this.authService
      .signInWithTwitter()
      .then((res) => {
        this.redirect();
      })
      .catch((err) => console.log(err));
  }
  signInWithFacebook() {
    this.authService
      .signInWithFacebook()
      .then((res) => {
        this.redirect();
      })
      .catch((err) => console.log(err));
  }

  signInWithGoogle() {
    this.authService
      .signInWithGoogle()
      .then((res) => {
        this.redirect();
      })
      .catch((err) => console.log(err));
  }
  signInWithGithub() {
    this.authService
      .signInWithGithub()
      .then((res) => {
        this.redirect();
      })
      .catch((err) => {
        if (err.code === "auth/account-exists-with-different-credential") {
          alert(err.message);
        }
      });
  }

  redirect() {
    return this.authService.isLoggedIn() && this.router.navigate(["/"]);
  }

  // redirect after user logs in
  ngOnInit() {
    this.redirect();
  }
  ngOnChanges() {
    this.redirect();
  }
}