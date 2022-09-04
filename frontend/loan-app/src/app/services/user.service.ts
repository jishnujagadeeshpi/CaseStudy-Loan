import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { LoginUser, User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private static url : string = "http://localhost:8880";
  constructor(private http : HttpClient, private router : Router) { }

  add(user : User){
    this.http.post(UserService.url + "/addUser", user).subscribe(data => data = user);
  }

  async login(login : LoginUser){
    
    await this.http.post(UserService.url + "/checkLogin", login).subscribe(data => {
      if(data){
        const navigationExtras : NavigationExtras = {
          state:{
            name        : Object(data)[0].name,
            mobile      : Object(data)[0].mobile,
            address     : Object(data)[0].address,
            dob         : Object(data)[0].dob,
            email       : Object(data)[0].email,
            empId       : Object(data)[0].empId,
            nationality : Object(data)[0].nationality,
            status      : Object(data)[0].status,
          }
        }
        this.router.navigate(['profile/dashboard'],navigationExtras);
      }
      else{
        this.router.navigate(['login']);
      }
    });
  }
}
