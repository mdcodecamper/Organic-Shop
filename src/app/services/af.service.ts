import { UserService } from './user.service';
import { AppUser } from './../models/app-user';
import { ActivatedRoute } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/Observable/of'; 

import * as firebase from 'firebase';

@Injectable()
export class AFService {

  public email:string;
  user$: Observable<firebase.User>;

  constructor(public af: AngularFireAuth,
              private route: ActivatedRoute,
              private userService:UserService) {

       this.user$ = af.authState;
   }

   loginWithGoogle(){
     let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || ' ';
     localStorage.setItem('returnUrl', returnUrl);

    this.af.auth.signInWithRedirect( new firebase.auth.GoogleAuthProvider())
   }

   logout(){
     this.af.auth.signOut();
   }

   get appUser$():Observable<AppUser>{
     return  this.user$.switchMap(user => 
     {
       if(user)
          return  this.userService.get(user.uid);

     return Observable.of(null);   
     }

    );
   }

}
