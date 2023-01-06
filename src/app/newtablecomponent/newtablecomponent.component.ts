import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { UserserviceService } from '../userservice.service'
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';


@Component({
  selector: 'app-newtablecomponent',
  templateUrl: './newtablecomponent.component.html',
  styleUrls: ['./newtablecomponent.component.css']
})
export class NewtablecomponentComponent implements OnInit {
  displayedColumns: string[] = ['id', 'email', 'username', 'firstname', 'city', 'password', 'action'];
  sortedData: Array<any> = [];
  data: Array<any> = [];
  postid: any;
  userdata: any;
  start: any;
  end: any;
  searchText: string | undefined;
  constructor(private service: UserserviceService, private router: Router) {
  }




  ngOnInit() {

    if (sessionStorage.getItem("isLogin") != "true") {
      this.router.navigate(['login'])
    }
    else {
    this.service.getAllUsers().then((res) => {
      res.json().then((data) => {
        this.data = data;
       // console.log(data);
        sessionStorage.setItem('start', "0")
        sessionStorage.setItem('end', "5")
        this.start = 0;
        this.end = 5;
        this.router.navigate(['home'])
        return data;
      });
    }).catch((err) => {
      console.log(err)
    });
    }
  }

  getUserData(postid: any) {
    this.service.getUserData(postid).then((res) => {
      res.json().then((userdata) => {
        this.userdata = userdata.userdata;
       // console.log(userdata);

        Swal.fire({
          title: userdata.username.charAt(0).toUpperCase() + userdata.username.slice(1) + "'s" + " Details",
          text: "",
          html: '<p>User ID: ' + userdata.id +
            '<p>User Email: ' + userdata.email +
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

  // alertConfirmation(userdata: any) {
  //   console.log(userdata.email)
  //   Swal.fire({
  //     title: 'A sure?',
  //     text: "ssd",
  //     icon: 'warning',
  //     showCancelButton: true,
  //     confirmButtonText: '',
  //     cancelButtonText: '',
  //   }).then((result) => {
  //     if (result.value) {
  //       Swal.fire('', '', 'success');
  //     } else if (result.dismiss === Swal.DismissReason.cancel) {
  //       Swal.fire('', '', 'error');
  //     }
  //   });
  // }

  logout() {
    sessionStorage.removeItem('Token')
    sessionStorage.removeItem('isLogin')
    return this.router.navigate(['login'])
  }

  prev() {

    let temp = this.start;
    this.start = this.start - 5;
    this.end = this.end - 5;
    if (this.start < 0) {
      this.start = 0
      this.end = this.start + 5;
    }
    return this.data

  }

  next() {

    this.start = this.start + 5;
    this.end = this.end + 5;

    if (this.start > this.data.length || this.end + 5 > this.data.length) {
      this.start = this.data.length - 5
      this.end = this.start + 5;
    }
    return this.data
  }

  sortData(sort: Sort) {
    console.log("cvv")
    const data = this.data.slice(this.start,this.end);
    if (!sort.active || sort.direction === '') {
      console.log(data)
      this.sortedData = data;
      console.log(this.sortData)
      return ;
    }
    console.log(data)
    this.sortedData = this.data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'id':
          return this.compare(a.id, b.id, isAsc);
        case 'email':
          return this.compare(a.email, b.email, isAsc);
        case 'username':
          return this.compare(a.username, b.username, isAsc);
        case 'firstname':
          return this.compare(a.name.firstname, b.name.firstname, isAsc);
        case 'password':
          return this.compare(a.password, b.password, isAsc);
        // case 'city':
        //   return this.compare(a.address.city, b.address.city, isAsc);
        default:
          return 0;
      }
    });
    console.log(this.data)
  }

  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
}
