import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomecomponentComponent } from './homecomponent/homecomponent.component';
import { LogincomponentComponent } from './logincomponent/logincomponent.component';
import { NewtablecomponentComponent } from './newtablecomponent/newtablecomponent.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  { path: '', component: HomecomponentComponent },
  { path: 'login', component: LogincomponentComponent },
  { path: 'home', component: NewtablecomponentComponent }, 
  // { path: 'home', component: NewtablecomponentComponent }, 
  {path:'login', component:LogincomponentComponent },
 //  {path:'home2', component:HomecomponentComponent },
  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
