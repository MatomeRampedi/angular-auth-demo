import { Injectable } from '@angular/core';
import { FirebaseAuth, FirebaseAuthState } from 'angularfire2';

@Injectable()
export class TokensService {
Tokens : FirebaseAuthState;

  constructor() { 
  }

  getToken(){
    return this.Tokens;
  }
  setToken(token){
    this.Tokens=token;
  }


}
