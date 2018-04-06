import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods, FirebaseAuth, FirebaseAuthState } from 'angularfire2';
import { Router } from '@angular/router';
import { moveIn, fallIn, moveInLeft } from '../router.animations';
import {  TokensService } from '../tokens.service';
import { UserInfo } from 'firebase';
import { Http } from '@angular/http';
@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css'],
  animations: [moveIn(), fallIn(), moveInLeft()],
  host: {'[@moveIn]': ''}
})
export class MembersComponent implements OnInit {
  name: any;
  state: string = '';
  tokens:FirebaseAuthState;
  accToken: UserInfo;
  fblink : any;
  constructor(public af: AngularFire,private router: Router, private accessTokens:TokensService,public http:Http) {

    this.af.auth.subscribe(auth => {
      if(auth) {
        this.name = auth;
        this.tokens=accessTokens.getToken();
        this.accToken=this.tokens.facebook;

      }
    });

  }

  logout() {
     this.af.auth.logout();
     this.router.navigateByUrl('/login');
  }
 
  graph(){
    let fb_observable = this.http.get(`https://graph.facebook.com/v2.9/search?q=${1779923848738666}&fields=id,name,start_time,description&type=event&access_token=EAAW9ryFCjecBAFqJFtOi1BLHbZBZAU0paZBRceZBDh8o1jVGt6ZA3YDnFWKPCuxdWaUPIXyZBXGXeeouLm1NOJZAzrwjv0tRf4b1vp8sgAgRVxLx6LWvKmZAmHflz8In0s4rP2IIhmroav2kMpRrddo3VZCC1TWwxkC3viQbvZBGAGGwZDZD`);

    let fb2 = fb_observable.map(friends => friends.json().data);
    
    fb2.subscribe(
      data => this.observableSuccess(data),
      error => this.observableFailure(error)
    )
    
  }

  observableSuccess (data) {
    console.log(data);
  }

  observableFailure (error) {
    console.log(error);
  }

  ngOnInit() {
  }
}