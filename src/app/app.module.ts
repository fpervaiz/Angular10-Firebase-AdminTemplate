import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';

import { MaterialModule } from './material.module'

import { environment } from '../environments/environment';
import { Component1Component } from './component1/component1.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    Component1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgxAuthFirebaseUIModule.forRoot(environment.firebaseConfig, () => "", environment.ngxAuthFirebaseUIConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
