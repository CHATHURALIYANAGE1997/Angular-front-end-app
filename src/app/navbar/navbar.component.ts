import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private router: Router){

  }

  logout(){
    console.log(sessionStorage.getItem('Token'))
    console.log(sessionStorage.getItem('isLogin'))
    sessionStorage.removeItem('Token')
    sessionStorage.removeItem('isLogin')
    console.log(sessionStorage.getItem('Token'))
    console.log(sessionStorage.getItem('isLogin'))
     this.router.navigate(['login'])
  }
}
