import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AuthGuard} from './auth.guard';
import {GosComponent} from './gos/gos.component';
import {OrgaComponent} from './orga/orga.component';
import {NotifyComponent} from './notify/notify.component';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {UserComponent} from './user/user.component';
import {MyDemandsComponent} from './my-demands/my-demands.component';


const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'gos', component: GosComponent, canActivate: [AuthGuard] },
  { path: 'organization', component: OrgaComponent, canActivate: [AuthGuard] },
  { path: 'notify', component: NotifyComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'user', component: UserComponent, canActivate: [AuthGuard] },
  { path: 'demands', component: MyDemandsComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
