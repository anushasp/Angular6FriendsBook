import { Injectable } from '@angular/core';
import { Http, Response, ResponseContentType } from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class FriendsService {
    private friendsUrl = "http://localhost:1337/users/friends";
    private friendsProfileUrl = "http://localhost:1337/users/friendsprofile";

  constructor(private http: Http) { }
  
  friendslist()
  {
    return this.http.get(this.friendsUrl,{ responseType: ResponseContentType.Text,withCredentials:true });
  }

  friendsProfile(data)
  {
    return this.http.post(this.friendsProfileUrl,data,{ responseType: ResponseContentType.Text,withCredentials:true });
  }
}
