import { Injectable } from '@angular/core';
import { Http, Response, ResponseContentType } from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private currentProfileUrl = "http://localhost:1337/users/current";
  private updateProfileUrl = "http://localhost:1337/users/viewprofile";

  constructor(private http: Http) { }

  currentProfile()
  {
    return this.http.get(this.currentProfileUrl, { responseType: ResponseContentType.Text,withCredentials:true });
  }
  updateProf(data)
  {
    return this.http.post(this.updateProfileUrl, data,{ responseType: ResponseContentType.Text,withCredentials:true });
  }
  
}
