import { Router } from '@angular/router';
import { AFService } from './../../services/af.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  constructor(private auth: AFService,
              private router: Router) { }

  login(){
    if(this.auth.loginWithGoogle())
      this.router.navigate(['/my/orders']);
    }
}

