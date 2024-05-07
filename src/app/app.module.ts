import { FormsModule } from '@angular/forms';
import { SignupComponent } from './components/signup/signup.component';
import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule ,routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import {LoginComponent} from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AddmoneyComponent } from './components/addmoney/addmoney.component';
import { AddfriendsComponent } from './components/addfriends/addfriends.component';
import { HeaderComponent } from './header/header.component';
import { LandingComponent } from './landing/landing.component';
import { ToastrModule, ToastNoAnimation, ToastNoAnimationModule } from 'ngx-toastr';
import { ExpencedetailComponent } from './components/expencedetail/expencedetail.component';
import { PaynowComponent } from './components/paynow/paynow.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    AddfriendsComponent,
    AddmoneyComponent,
    HeaderComponent,
    LandingComponent,
    routingComponents,
    ExpencedetailComponent,
    PaynowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ToastrModule.forRoot(),
    ToastNoAnimationModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
