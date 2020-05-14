import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { HomeModule } from "./components/home/home.module";
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { FooterComponent } from "./components/footer/footer.component";
import { ServiceInterceptor } from "./service.interceptor";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { environment } from "../environments/environment";

import { AuthService } from "./services/auth.service";
import { LoginComponent } from "./components/login/login.component";

import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireAuthModule } from "angularfire2/auth";
import { PrivacyComponent } from "./components/privacy/privacy.component";
import { TermsAndConditionsComponent } from "./components/terms-and-conditions/terms-and-conditions.component";
import { AuthGuard } from "./services/auth-guard.service";
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    LoginComponent,
    PrivacyComponent,
    TermsAndConditionsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    HomeModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase, "jobfinder"),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
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
