import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user.model';
import { TokenStorageService } from '../services/token-storage.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  users : User[] = [];
  constructor(private router : Router, private service : UserService, private tokenManager : TokenStorageService) { }

  ngOnInit(): void{
    var user = this.tokenManager.getUser();
    var username = Object(user)[0].name;
    this.service.profile(username).then(user => user.subscribe(data => this.users = data));
    console.log(this.users);
  }

  getDetails(token : String){
    this.service.profile(token);
  }

}
