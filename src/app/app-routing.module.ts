import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AuthGuard} from './auth.guard';
import {GosComponent} from './gos/gos.component';
import {SiteComponent} from './site/site.component';
import {NotifyComponent} from './notify/notify.component';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {UserComponent} from './user/user.component';
import {MyDemandsComponent} from './my-demands/my-demands.component';
import { AccountAlreadyCreatedComponent } from './signup/account-already-created/account-already-created.component';
import {DemandFormComponent} from './demand-form/demand-form.component';
import {ManageOrgaComponent} from './manage-orga/manage-orga.component';


const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'gos', component: GosComponent, canActivate: [AuthGuard] },
  { path: 'site', component: SiteComponent, canActivate: [AuthGuard] },
  { path: 'notify', component: NotifyComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'user', component: UserComponent, canActivate: [AuthGuard] },
  { path: 'demands', component: MyDemandsComponent, canActivate: [AuthGuard] },
  { path: 'account-already-created', component: AccountAlreadyCreatedComponent },
  { path: 'demand-form', component: DemandFormComponent, canActivate: [AuthGuard] },
  { path: 'demand-form/:requestId', component: DemandFormComponent, canActivate: [AuthGuard] },
  { path: 'manage-orga', component: ManageOrgaComponent, canActivate: [AuthGuard] },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
