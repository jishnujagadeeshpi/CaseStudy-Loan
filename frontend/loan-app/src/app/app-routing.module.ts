import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ApplyComponent } from './apply/apply.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
// import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path : 'login', component : LoginComponent},
  {path : 'register', component : RegisterComponent},
  {path : 'adminPage', component : AdminComponent},
  {path : 'profile', component: UserComponent},
  {path : 'profile/dashboard', component : ProfileComponent},
  {path : 'profile/apply', component : ApplyComponent},
  // {path: '**', redirectTo : '/profile', pathMatch:'full'},
  {path : '', redirectTo:'/login', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
