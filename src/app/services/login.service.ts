import { Injectable } from '@angular/core';
import { Http, Response, ResponseContentType } from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url = "http://localhost:1337/users/login";

  constructor(private http: Http) { }
  
  checkLogin(data)
  {
    return this.http.post(this.url, data, { responseType: ResponseContentType.Text, withCredentials: true });
    
  }
}
