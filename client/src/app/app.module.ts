import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from './app-routing.module'
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import {RegisterComponent} from './components/register/register.component'

import {LocationsService} from './services/locations-service/location.service';
import { LoginComponent } from './components/login/login.component'
import {AuthService} from './services/auth-service/auth.service'
import {ToastrService} from './services/toastr-service/toastr.service';
import { CatalogComponent } from './components/catalog/catalog.component'
import {CatalogService} from './services/catalog-service/catalog.service';
import {AdminService} from './services/admin-service/admin.service';
import { LandmarkComponent } from './components/landmark/landmark.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    LoginComponent,
    RegisterComponent,
    CatalogComponent,
    LandmarkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [LocationsService,AuthService,ToastrService,CatalogService,AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
