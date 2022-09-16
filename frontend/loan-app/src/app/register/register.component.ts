import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { User } from '../model/user.model';
import { UserService } from '../services/user.service';
import * as $ from 'jquery';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user : User = new User();

  constructor(private service : UserService, private router : Router, private tokenStorage : TokenStorageService) { }

  ngOnInit(): void {

    $(document).ready(() => {
      $("#cnfPassword").keyup(() =>{
          if($("#password").val() === $("#cnfPassword").val()){

            $('#submit-btn').prop('disabled',false);
          }
          else{
            $('#submit-btn').prop('disabled',true);
          }
      });
  });
  }

  async save(){
    // console.log("hi this is save function");
    console.log(this.user);
    this.service.add(this.user);

    (await this.service.add(this.user)).subscribe(data => {
      this.tokenStorage.saveToken(data[0].accessToken);
      this.tokenStorage.saveUser(this.user);
      this.router.navigate(['/profile/dashboard']);
    })

    // const navigationExtras : NavigationExtras = {
    //   state:{
    //     name        : Object(this.user).name,
    //     mobile      : Object(this.user).mobile,
    //     dob         : Object(this.user).dob,
    //     email       : Object(this.user).email,
    //   }
    // }
    // this.router.navigate(['profile/dashboard'],navigationExtras);
  }

}
