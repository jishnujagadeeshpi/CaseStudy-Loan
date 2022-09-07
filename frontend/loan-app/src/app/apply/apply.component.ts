import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { applyDetails, User } from '../model/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.css']
})
export class ApplyComponent implements OnInit {
  applyDet : applyDetails = new applyDetails();

  constructor(private service : UserService, private router : Router) { }

  ngOnInit(): void {
  }

  apply(){
    console.log(this.applyDet);
    // this.service.update(this.applyDet);
  }
}
