import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public dataService:DataServiceService) { }

  ngOnInit(): void {
  }
loginCredentials=[
  {
    "username":"admin",
    "password":"admin",
    "role":"admin"
  },
  {
    "username":"user",
    "password":"user",
    "role":"user"
  },
  {
    "username":"hr",
    "password":"hr",
    "role":"hr"
  },
  {
    "username":"manager",
    "password":"manager",
    "role":"manager"
  }
]
  CompanyLogin(username: any,password: any){
console.log(username.value,password.value)
this.loginCredentials.map((_element)=>{
  if(_element.username==username.value && _element.password==password.value){
// let loggedInCredentials={
//   "username":_element.username,
//   "role":_element.role,
//   "isLoggedIn":true
// }
this.dataService.setUserLoggedInDetails(true);
  }
})
  }
}
