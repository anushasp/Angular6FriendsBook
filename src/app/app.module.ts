import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';  
import { LoginComponent } from './login/login.component';
import { HttpModule } from  '@angular/http';
import { LoginService } from './services/login.service';
import { RegisterComponent } from './register/register.component';
import { RegisterService } from './services/register.service';
import { RouterModule ,RouterOutlet} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import { HomeComponent } from './home/home.component';
import { HomeService } from './services/home.service';
import { ProfileComponent } from './profile/profile.component';
import { ProfileService } from './services/profile.service';
import { FriendsComponent } from './friends/friends.component';
import { FriendsService } from './services/friends.service';
import { NotificationsComponent } from './notifications/notifications.component';
import { NotificationsService } from './services/notifications.service';
import { MessengerComponent } from './messenger/messenger.component';
import { MessengerService } from './services/messenger.service';
import { MessagefriendComponent } from './messagefriend/messagefriend.component';
import { MessageService } from './services/messages.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    FriendsComponent,
    NotificationsComponent,
    MessengerComponent,
    MessagefriendComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    HttpModule,
    RouterTestingModule,
    RouterModule.forRoot([
      {path:'',component:LoginComponent},
      {path:'home',component:HomeComponent },
      {path:'profile',component:ProfileComponent },
      {path:'friends',component:FriendsComponent },
      {path:'notifications',component:NotificationsComponent },
      {path:'messenger',component:MessengerComponent},
      {path:'messages/:friendname',component:MessagefriendComponent},
      
    ])
  ],
  providers:[
    LoginService,
    RegisterService,
    HomeService,
    ProfileService,
    FriendsService,
    NotificationsService,
    MessengerService,
    MessageService,
    RouterOutlet
  ] ,
  bootstrap: [AppComponent]
})
export class AppModule { }
