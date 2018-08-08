import { Component } from '@angular/core';
import { unwrapResolvedMetadata } from '@angular/compiler';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  
{
  userid:string;
  name:string;
  pass:string;
  gender:string;
  school:string;
  day:string;
  month:string;
  year:string;
  registerresult:string;
  
  constructor(private service: RegisterService) { }
  register()
  {
    var data =
      {
        "userid": this.userid,
        "password": this.pass,
        "name": this.name,
        "gender": this.gender,
        "school": this.school,
        "day": this.day,
        "month": this.month,
        "year": this.year
          
      }
      this.service.registeration(data).subscribe(response => 
        {
          this.registerresult = response.json().result;
      });
  }

}
