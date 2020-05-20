import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { HomeModule } from "./components/pages/home/home.module";
import { NavBarComponent } from "./components/shell/nav-bar/nav-bar.component";
import { FooterComponent } from "./components/shell/footer/footer.component";
import { ServiceInterceptor } from "./service.interceptor";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { environment } from "../environments/environment";

import { AuthService } from "./services/auth.service";
import { LoginComponent } from "./components/auth/login/login.component";

import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireAuthModule } from "angularfire2/auth";
import { PrivacyComponent } from "./components/privacyTerms/privacy/privacy.component";
import { TermsAndConditionsComponent } from "./components/privacyTerms/terms-and-conditions/terms-and-conditions.component";
import { AuthGuard } from "./services/auth-guard.service";
import { AcceptTermsComponent } from "./components/auth/accept-terms/accept-terms.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { EmailComponent } from "./components/auth/email/email.component";
import { AcceptTermsCheckboxComponent } from "./components/auth/accept-terms-checkbox/accept-terms-checkbox.component";
import { JobsModule } from "./components/pages/jobs.module";
import { SearchBarModule } from "./components/search-bar/search-bar.module";

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    LoginComponent,
    PrivacyComponent,
    TermsAndConditionsComponent,
    AcceptTermsComponent,
    EmailComponent,
    AcceptTermsCheckboxComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    HomeModule,
    JobsModule,
    SearchBarModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase, "jobfinder"),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule,
  ],

  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ServiceInterceptor,
      multi: true,
    },
    AuthService,
    AuthGuard,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
