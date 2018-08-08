import { Component, OnInit } from '@angular/core';
import { MessengerService } from '../services/messenger.service';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-messenger',
  templateUrl: './messenger.component.html',
  styleUrls: ['./messenger.component.css']
})
export class MessengerComponent implements OnInit {
messages=[];
  constructor(private service:MessengerService,private router:Router) { }

  ngOnInit() 
  {
    this.service.lastMsgs().subscribe(response => {
      this.messages = response.json().lastmsgs;
      
    })
  }
  selectMsg(msg)
  {
    this.router.navigateByUrl('/messages/'+msg.friendname);
  }

  

}
