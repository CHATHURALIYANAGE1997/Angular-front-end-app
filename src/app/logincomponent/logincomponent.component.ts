import { Component,OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-logincomponent',
  templateUrl: './logincomponent.component.html',
  styleUrls: ['./logincomponent.component.css']
})
export class LogincomponentComponent implements OnInit {
  username:any;
  password:any;
  isLogin=false;
constructor(private service:UserserviceService,private router: Router){

}

  Login(username:any,password:any) {
   return this.service.userLogin(username,password).subscribe((response: any) => {
     // console.log(response);
      this.isLogin=true;
      sessionStorage.setItem('Token',response.token)
      sessionStorage.setItem('isLogin','true')
     // console.log(sessionStorage.getItem('Token'))
     // console.log(sessionStorage.getItem('isLogin'))
      this.router.navigate(['home'])
    },error=>{
      console.log(error)
    });      
   
  }
  ngOnInit() {
   
  }
  
}
