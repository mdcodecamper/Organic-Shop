import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import {  AFService } from './af.service';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthGuardService implements CanActivate{

  constructor(private auth: AFService,
              private router:Router){

   }

  canActivate(route, state: RouterStateSnapshot){
      return this.auth.user$.map(user =>
          {
            if(user) 
              return true;
            
            this.router.navigate(['/login'], {queryParams:{ returnUrl: state.url}});
              return false;
          });

  }

}
