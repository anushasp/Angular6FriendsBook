import { Component, OnInit } from '@angular/core';
import { NotificationsService } from '../services/notifications.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  notlist=[];
  notifcontent:string;

  constructor(private service:NotificationsService,private router: Router) { }

  ngOnInit() 
  {
    this.service.notifications().subscribe(response=>{
      this.notlist=response.json().result;
       
    })
  }

  Accept(notif)
  {
    var data =
    {
      "not": notif
    }
    this.service.accept(data).subscribe(response=>{
        alert(response.json().result)
        this.service.notifications().subscribe(response=>{
          this.notlist=response.json().result;
        })
    })
  }

  Reject(notif)
  {
    var data =
    {
      "not": notif
    }
    this.service.reject(data).subscribe(response=>{
      alert(response.json().result)
      this.service.notifications().subscribe(response=>{
        this.notlist=response.json().result;
      })
    })
  }

  Reply(notif)
  {
    var data =
    {
      "not": notif
    }
    this.service.reject(data).subscribe(response=>{
      this.router.navigateByUrl('/messages/'+response.json().result);
      this.service.notifications().subscribe(response=>{
        this.notlist=response.json().result;
      })
    })
  }

  Ignore(notif)
  {
    var data =
    {
      "not": notif
    }
    this.service.reject(data).subscribe(response=>{
      alert(response.json().result)
      this.service.notifications().subscribe(response=>{
        this.notlist=response.json().result;
      })
    })
  }
 
}
