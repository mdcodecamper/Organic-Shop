import { AppUser } from './../../models/app-user';
import { AFService } from './../../services/af.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  {

 appUser: AppUser;

  constructor(private auth: AFService) {
    auth.appUser$.subscribe(appUser => this.appUser = appUser);
   }

  logout(){
   this.auth.logout();
  }

}
