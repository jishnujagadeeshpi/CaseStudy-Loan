import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUser } from '../model/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login : LoginUser = new LoginUser();

  constructor(private service : UserService) { }

  ngOnInit(): void {
  }

  checkLogin(){
    this.service.login(this.login); 
  }
}
