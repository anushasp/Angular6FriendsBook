import { Injectable } from '@angular/core';
import { Http, Response, ResponseContentType } from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class MessengerService {
  private url = "http://localhost:1337/users/messenger";

  constructor(private http: Http) { }
  
  lastMsgs()
  {
    return this.http.get(this.url,{ responseType: ResponseContentType.Text, withCredentials: true });
  }
}
