
import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';
import {Router} from '@angular/router'
@Component
    ({
        selector: 'login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.css']
    })
export class LoginComponent {
    username = "anusha";
    password = "anusha";
    result: string;
    constructor(private service: LoginService, private router: Router) {
    }

    login() 
    {
        var data =
        {
            username: this.username,
            password: this.password
        }
        this.service.checkLogin(data).subscribe(response => {
            if (response.json().login == "pass") {
                console.log("passed");
               this.router.navigateByUrl('/home');
            }
            else {
                this.result = "Either Username or Password is incorrect";
                alert(this.result);
                console.log("Failed Login")
            }
        })
    }



}