import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomecomponentComponent } from './homecomponent/homecomponent.component';
import { LogincomponentComponent } from './logincomponent/logincomponent.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
 import { SearchFilterPipe } from './user';
import { NavbarComponent } from './navbar/navbar.component';
import { MatSortModule } from '@angular/material/sort';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialExampleModule} from '../material.module';
import {MatNativeDateModule} from '@angular/material/core';
import {NewtablecomponentComponent} from '../app/newtablecomponent/newtablecomponent.component';
@NgModule({
  declarations: [
    AppComponent,
    HomecomponentComponent,
    LogincomponentComponent,
    PagenotfoundComponent,
    SearchFilterPipe,
    NavbarComponent,
    NewtablecomponentComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    MaterialExampleModule,
    MatSortModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports:[MatSortModule,]
})
export class AppModule { }
