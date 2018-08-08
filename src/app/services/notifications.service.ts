import { Injectable } from '@angular/core';
import { Http, Response, ResponseContentType } from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  private notifUrl = "http://localhost:1337/users/DisplayNotifications";
  private acceptfriendUrl = "http://localhost:1337/users/AcceptFriend";
  private rejectfriendUrl = "http://localhost:1337/users/RejectFriend";
  

  constructor(private http: Http) { }
  notifications()
  {
    return this.http.get(this.notifUrl,{ responseType: ResponseContentType.Text, withCredentials: true});
  }

  accept(data)
  {
    return this.http.post(this.acceptfriendUrl,data,{ responseType: ResponseContentType.Text,withCredentials: true });
  }
  
  reject(data)
  {
    return this.http.post(this.rejectfriendUrl,data,{ responseType: ResponseContentType.Text,withCredentials: true })
  }
}
