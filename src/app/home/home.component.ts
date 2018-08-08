import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/home.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  currentuser: string;
  updateslist = [];
  newpost: string;
  clicked = false;
  searchname = "";
  requestResult: string;
  checkfriends: boolean;
  noaccount: boolean;
  friendDetails = {};
  searchprof:string;
  notnum:string;

  constructor(private service: HomeService, private router: Router) { }

  ngOnInit() {
    this.clicked = false;
    this.service.current().subscribe(response => {
      this.currentuser = response.json().name;
    })

    this.service.notificationsNum().subscribe(response => {
      this.notnum = response.json().result;
    })

    this.service.latestupdates().subscribe(response => {
      this.updateslist = response.json().itemslist;
    })


  }
  
  search() 
  {
    this.clicked=true;
    this.searchprof=this.searchname;
    var data =
    {
      "searchname": this.searchname
    }
    this.service.checkfriends(data).subscribe(response => {
      if (response.json().res.result == "pass") {
        this.checkfriends = true;
      }
      else {
        this.checkfriends = false;
      }
      this.updateslist = response.json().itemslist;
    });

    this.service.checkaccount(data).subscribe(response => {
      this.noaccount = false;
      if (response.json().res == "No such account") {
        this.noaccount = true;
      }
      else {
        this.friendDetails = response.json().res;
      }
    });

  }
  Send()
  {
    this.searchprof=this.searchname;
    var data =
    {
      "searchname": this.searchname
    }
    this.service.sendrequest(data).subscribe(response => {
      alert(response.json().result)
    })
  }
  Messenger()
  {
    this.router.navigateByUrl('/messages/'+this.searchname);
  }



  postcomment(update) {
    var data =
    {
      "selectedupdate": update.updates,
      "commentonUpdate": update.newcomment,
      "res": update.result
    }
    this.service.postcom(data).subscribe(response => {
      update.result = response.json().ress;

      this.service.latestupdates().subscribe(response => {
        this.updateslist = response.json().itemslist;
      })
    })
  }

  createPost() {
    var data =
    {
      "newpost": this.newpost
    }
    this.service.createpost(data).subscribe(response => {
      this.newpost = "";

      this.service.latestupdates().subscribe(response => {
        this.updateslist = response.json().itemslist;
      })
    })
  }

  /**
   * 
   */
  logout() {
    this.service.logout().subscribe(response => {
      if (response.json().ress == "logout") {
        this.router.navigateByUrl('/');
      }
    })
  }
}
