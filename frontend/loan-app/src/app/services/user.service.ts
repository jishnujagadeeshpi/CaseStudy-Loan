import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { applyDetails, LoginUser, User } from '../model/user.model';
import { TokenStorageService } from './token-storage.service';
// import { TokenStorageServiceService } from './token-storage-service.service';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private static url : string = "http://localhost:8880";
  constructor(private http : HttpClient, private tokenManager : TokenStorageService) { }

  add(user : User){
    this.http.post(UserService.url + "/addUser", user).subscribe(data => data = user);
  }

  async login(login : LoginUser) : Promise<Observable<any>>{
    console.log("after submit")
    return await this.http.post(UserService.url + "/checkLogin", login);
}


  async profile(username : String | null){
    return await this.http.get<User[]>(UserService.url + "/profile/dashboard?username=" + username);
  }

  update(user : User){
    user.name = Object(this.tokenManager.getUser())[0].name;
    this.http.post(UserService.url + "/profile/apply/updateUser",user).subscribe(data => data = user);
  }

  async list(){
    // return this.flights;
    return await this.http.get<User[]>(UserService.url + "/applicants");
  }
}
