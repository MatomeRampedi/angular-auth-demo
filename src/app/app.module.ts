import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';
import { MembersComponent } from './members/members.component';
import { AuthGuard } from './auth.service';
import { routes } from './app.routes';


// firebase config informatoin for setting up an app
export const firebaseConfig = {

    apiKey: "AIzaSyD61xL7NoSY3UjyO60o4-k_K4q6PJGEbo8",
    authDomain: "angularauth-61a52.firebaseapp.com",
    databaseURL: "https://angularauth-61a52.firebaseio.com",
    projectId: "angularauth-61a52",
    storageBucket: "",
    messagingSenderId: "1097611592340"
 

};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmailComponent,
    SignupComponent,
    MembersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    routes
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
