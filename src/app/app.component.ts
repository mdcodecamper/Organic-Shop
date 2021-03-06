import { UserService } from './services/user.service';
import { Router } from '@angular/router';
import { AFService } from './services/af.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private userService: UserService, private af:AFService, route:Router) {
   af.user$.subscribe(user => {
     if(!user)
        return;
    
     userService.save(user);
     
     let returnUrl = localStorage.getItem('returnUrl');
     if(!returnUrl)
        return;

     localStorage.removeItem('returnUrl');   
     route.navigateByUrl(returnUrl);  
   });
    
  }
}
