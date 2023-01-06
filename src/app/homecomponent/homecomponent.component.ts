import { Component, OnInit, VERSION } from '@angular/core';
import { UserserviceService } from '../userservice.service'
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-homecomponent',
  templateUrl: './homecomponent.component.html',
  styleUrls: ['./homecomponent.component.css']
})
export class HomecomponentComponent implements OnInit {
  data: Array<any> = [];
  postid: any;
  userdata: any;
  start:any;
  end:any;
  searchText: string | undefined;

  getUserData(postid: any) {
    this.service.getUserData(postid).then((res) => {
      res.json().then((userdata) => {
        this.userdata = userdata.userdata;
        console.log(userdata);

        Swal.fire({
          title: userdata.username.charAt(0).toUpperCase() + userdata.username.slice(1) + "'s" + " Details",
          text: "",
          html: '<p>User Email: ' + userdata.email +
            '</p><p>Name: ' + userdata.name.firstname + " " + userdata.name.lastname +
            '</p><p>City: ' + userdata.address.city +
            '</p><p>Phone Number: ' + userdata.phone +
            '</p><p>Password: ' + userdata.password +
            '</p><p>Address: ' + userdata.address.zipcode + ", " + userdata.address.street + ", " + userdata.address.city,
          showCancelButton: true,
          confirmButtonText: 'Ok',
          cancelButtonText: 'Cancel',
        })
        return this.userdata;
      })
    })
  }

  alertConfirmation(userdata: any) {
    console.log(userdata.email)
    Swal.fire({
      title: 'Are you sure?',
      text: "ssd",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, go ahead.',
      cancelButtonText: 'No, let me think',
    }).then((result) => {
      if (result.value) {
        Swal.fire('Removed!', 'Product removed successfully.', 'success');
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'Product still in our database.)', 'error');
      }
    });
  }
  constructor(private service: UserserviceService, private router: Router) {
  }

  ngOnInit() {
    if (sessionStorage.getItem("isLogin") != "true") {
     this.router.navigate(['login'])
    }
    else{
      this.service.getAllUsers().then((res) => {
        res.json().then((data) => {
          this.data = data;
          console.log(data); 
          sessionStorage.setItem('start',"0")
          sessionStorage.setItem('end',"5")
          this.start=0;
          this.end=5;
          this.router.navigate(['home2'])
          return data;
        });
      }).catch((err) => {
        console.log(err)
      });
    }
  }

  logout() {
    console.log(sessionStorage.getItem('Token'))
    console.log(sessionStorage.getItem('isLogin'))
    sessionStorage.removeItem('Token')
    sessionStorage.removeItem('isLogin')
    console.log(sessionStorage.getItem('Token'))
    console.log(sessionStorage.getItem('isLogin'))
    return this.router.navigate(['login'])
  }

  prev(){
   console.log(this.start)
   console.log(this.end)
   let temp=this.start;
   this.start=this.start-5;
   this.end=this.end-5;
   console.log(this.start)
   console.log(this.end)
   if(this.start<0){
    this.start=0
    this.end=this.start+5;
   }
   return this.data
   
  }

  next(){
    console.log(this.start)
    console.log(this.end)
    this.start=this.start+5;
    this.end=this.end+5;
    console.log(this.start)
    console.log(this.end)
    if(this.start>this.data.length || this.end+5>this.data.length){
      this.start=this.data.length-5
      this.end=this.start+5;
     }
    return this.data
  }

}
