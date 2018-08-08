import { Component, OnInit } from '@angular/core';
import { FriendsService } from '../services/friends.service';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {
  friendsList=[];
  friendDetails={};
  selectedFriend:string;
  search:string;
  constructor(private service:FriendsService) { }

  ngOnInit() 
  {
    this.service.friendslist().subscribe(response => {
         this.friendsList=response.json().friends;
    })
  }

  

  selectPerson(friend,index)
  {
    this.selectedFriend=friend;
      var data=
      {
        "friendprof":friend
      }
      this.service.friendsProfile(data).subscribe(response => {
        this.friendDetails=response.json().details;
   })
  }

}
