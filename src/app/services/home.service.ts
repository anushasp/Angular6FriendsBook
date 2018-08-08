import { Injectable } from '@angular/core';
import { Http, Response, ResponseContentType } from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private currentuserUrl = "http://localhost:1337/users/current";
  private latestUpdatesUrl="http://localhost:1337/users/latestupdates";
  private postcommentUrl="http://localhost:1337/users/commentupdates";
  private logoutUrl="http://localhost:1337/users/logout";
  private createpostUrl="http://localhost:1337/users/createpost";
  private checkAccountUrl="http://localhost:1337/users/checkaccount";
  private checkfriendsUrl="http://localhost:1337/users/checkfriends";
  private friendrequestUrl="http://localhost:1337/users/friendrequest";
  private notifnumUrl="http://localhost:1337/users/notificationsnum";

  constructor(private http: Http) { }
  
  current()
  {
    return this.http.get(this.currentuserUrl,{responseType: ResponseContentType.Text, withCredentials: true });
  }

  notificationsNum()
  {
    return this.http.get(this.notifnumUrl,{responseType: ResponseContentType.Text, withCredentials: true });
  }
  
  latestupdates()
  {
    return this.http.get(this.latestUpdatesUrl,{responseType: ResponseContentType.Text,withCredentials: true});
  }

  createpost(data)
  {
    return this.http.post(this.createpostUrl,data,{responseType: ResponseContentType.Text,withCredentials: true});
  }

  postcom(data)
  {
    return this.http.post(this.postcommentUrl,data,{responseType: ResponseContentType.Text,withCredentials: true}); 
  }
  checkfriends(data)
  {
    return this.http.post(this.checkfriendsUrl,data,{responseType: ResponseContentType.Text,withCredentials: true}); 
  }

  checkaccount(data)
  {
    return this.http.post(this.checkAccountUrl,data,{responseType: ResponseContentType.Text,withCredentials: true}); 
  }

  sendrequest(data)
  {
    return this.http.post(this.friendrequestUrl,data,{responseType: ResponseContentType.Text,withCredentials: true}); 
  }
  logout()
  {
    return this.http.get(this.logoutUrl,{responseType: ResponseContentType.Text,withCredentials: true}); 
  }
}
