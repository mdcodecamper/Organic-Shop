// import { AppUser } from './../models/app-user';
import { UserService } from './user.service';
import { AFService } from './af.service';
import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';



@Injectable()
export class AdminAuthGuardService implements CanActivate{

  constructor(private af: AFService, private userService:UserService) { }

  canActivate(): Observable<boolean>{
    return this.af.appUser$.map(appUser=>appUser.isAdmin);
  }
}
