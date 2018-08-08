import { Injectable } from '@angular/core';
import { Http, Response, ResponseContentType } from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private prevMsgsUrl = "http://localhost:1337/users/previousmessages";

  constructor(private http: Http) { }
  
  prevmsgs(data)
  {
    return this.http.get(this.prevMsgsUrl+"/"+data, { responseType: ResponseContentType.Text, withCredentials: true });
  }
}
