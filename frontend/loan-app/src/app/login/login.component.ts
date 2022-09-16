import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginUser } from '../model/user.model';
import { ProfileComponent } from '../profile/profile.component';
import { TokenStorageService } from '../services/token-storage.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  login : LoginUser = new LoginUser();

  constructor(private service : UserService, private router : Router, private tokenStorage:TokenStorageService) { }

  ngOnInit(): void {
  }

  async checkLogin(){
    if(this.login.role == "admin"){
      (await this.service.loginAdmin(this.login)).subscribe(data => {
        if(data)
          this.router.navigate(['adminPage'])
        else
          window.location.reload();

      })
    }
    else{
      (await this.service.login(this.login)).subscribe(data =>{

        if(Object(data).length == 1) {
          this.tokenStorage.saveToken(data[0].accessToken);
          this.tokenStorage.saveUser(data[0].userData);
          this.isLoginFailed = false;
          this.isLoggedIn = true;
  
          this.router.navigate(['/profile/dashboard']);
  
        }
        else{
          this.errorMessage = "Login Failed";
          this.isLoginFailed = true;
          window.location.reload();
        }
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      })
    }
    
  }

}
