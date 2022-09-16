import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  users : User[] = [];

  constructor(private service :UserService) { }

  ngOnInit(): void {
    this.service.list().then(applicants => applicants.subscribe(data => this.users = data))
  }

  approve(){
    console.log("approved");
  }

  reject(){
    console.log("rejected");
  }
}
