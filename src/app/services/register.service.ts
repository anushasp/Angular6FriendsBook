import { Injectable } from '@angular/core';
import { Http, Response, ResponseContentType } from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private url = "http://localhost:1337/users/register";

  constructor(private http: Http) { }
  
  registeration(data)
  {
    return this.http.post(this.url, data, { responseType: ResponseContentType.Text });
    
  }
}
