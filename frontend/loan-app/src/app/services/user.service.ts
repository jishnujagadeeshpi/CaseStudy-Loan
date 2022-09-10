import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { applyDetails, LoginUser, User } from '../model/user.model';
// import * as jwt from 'jsonwebtoken';
// import * as jwt from 'jsonwebtoken';

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
      let username = Object(data)[0].name;
      // let token  = jwt.sign(username,"secret");
      // console.log(token);
      console.log(typeof(data));
      try {
        console.log("try")
        if(data){
          console.log("inside if")
        console.log(data);
        this.router.navigate(['profile/dashboard']);
      }
      else{
        console.log("else");
        this.router.navigate(['login']);
      }

      } catch (error) {
        console.log(error);
      }
      
      
        // const navigationExtras : NavigationExtras = {
        //   state:{
        //     name        : Object(data)[0].name,
        //     mobile      : Object(data)[0].mobile,
        //     address     : Object(data)[0].address,
        //     dob         : Object(data)[0].dob,
        //     email       : Object(data)[0].email,
        //     empId       : Object(data)[0].empId,
        //     nationality : Object(data)[0].nationality,
        //     status      : Object(data)[0].status,
        //   }
        // }
        
    });
  }

  update(applyDet : applyDetails){
    this.http.put(UserService.url + "/apply",applyDet).subscribe(data => data = applyDet);
  }
}
