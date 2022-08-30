import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private static url : string = "http://localhost:8880";

  constructor(private http : HttpClient) { }

  add(user : User){
    this.http.post(UserService.url + "/addUser", user).subscribe(data => data = user);
  }
}
