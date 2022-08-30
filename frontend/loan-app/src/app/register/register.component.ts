import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user.model';
import { UserService } from '../services/user.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user : User = new User();

  constructor(private service : UserService, private router : Router) { }

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

  save(){
    console.log("hi this is save function");
    console.log(this.user);
    this.service.add(this.user);
    this.router.navigate(['profile']);
  }

}