import { Component, OnInit } from '@angular/core';
import { UserDetailDto } from 'src/app/models/userDetailDto';
import { UserService } from 'src/app/services/User/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private userService : UserService) { }

  users:UserDetailDto[] =[];
  dataLoaded = false;

  ngOnInit(): void {
    this.getUser()
  }

  getUser(){
    this.userService.getUser().subscribe((response)=>{
      this.users = response.data
      this.dataLoaded = true;
    })
  }
}
