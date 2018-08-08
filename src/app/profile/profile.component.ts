import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  username:string;
  gender:string;
  school:string;
  bday:string;
  message:string;

  constructor(private service:ProfileService) { }

  ngOnInit() 
  {
    this.service.currentProfile().subscribe(response => {
      this.username = response.json().name;
      this.gender=response.json().gender;
      this.school = response.json().school;
      this.bday=response.json().bday;
    })
  }

  Update()
  {
    var data =
    {
      "username":this.username,
      "gender":this.gender,
      "school":this.school,
      "bday":this.bday
    }
     this.service.updateProf(data).subscribe(response=>{

        this.message=response.json().msg;

     })
  
  }


}
