import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/messages.service';
import { ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-messagefriend',
  templateUrl: './messagefriend.component.html',
  styleUrls: ['./messagefriend.component.css']
})
export class MessagefriendComponent implements OnInit {
    friendname:string;
    ViewPrevMessages:string;

  constructor(private service:MessageService,private route:ActivatedRoute) { }

  ngOnInit() 
  {
    
    this.route.paramMap.subscribe(params=>
    {
      this.friendname =params.get('friendname');
    })

    this.service.prevmsgs(this.friendname).subscribe(response =>{

      this.ViewPrevMessages=response.json().result;

    });
    
  }

}
