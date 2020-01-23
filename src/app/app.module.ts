import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { NavbarComponent } from './navbar/navbar.component';
import {AppRoutingModule} from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { HomeCardComponent } from './home/home-card/home-card.component';
import { GosComponent } from './gos/gos.component';
import { FiltersSmallComponent } from './gos/filters-small/filters-small.component';
import { MessageComponent } from './gos/message/message.component';
import { FiltersComponent } from './gos/filters/filters.component';
import { CommentComponent } from './gos/message/comment/comment.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SiteComponent } from './site/site.component';
import {AgmCoreModule, GoogleMapsAPIWrapper} from '@agm/core';
import { SiteDetailsComponent } from './site/site-details/site-details.component';
import { NotifyComponent } from './notify/notify.component';
import { FacebookComponent } from './notify/facebook/facebook.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { MemberComponent } from './signup/member/member.component';
import { SiteCreatorComponent } from './signup/site-creator/site-creator.component';
import { OrgaCreatorComponent } from './signup/orga-creator/orga-creator.component';
import { ConfirmAddressComponent } from './dialogs/confirm-address/confirm-address.component';
import { HomeFooterComponent } from './home/home-footer/home-footer.component';
import { UserComponent } from './user/user.component';
import { DialogDeleteComponent } from './user/dialog-delete/dialog-delete.component';
import { DialogModifyComponent } from './user/dialog-modify/dialog-modify.component';
import { MyDemandsComponent } from './my-demands/my-demands.component';
import { DemandComponent } from './my-demands/demand/demand.component';
import { AccountAlreadyCreatedComponent } from './signup/account-already-created/account-already-created.component';
import {JwtInterceptor} from './helpers/jwt.interceptor';
import { DemandFormComponent } from './demand-form/demand-form.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { TwitterComponent } from './notify/twitter/twitter.component';
import { MobileComponent } from './notify/mobile/mobile.component';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material';
import {MAT_MOMENT_DATE_ADAPTER_OPTIONS, MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
import { ManageOrgaComponent } from './manage-orga/manage-orga.component';
import { SitesComponent } from './manage-orga/sites/sites.component';
import { ManageSiteComponent } from './manage-orga/sites/manage-site/manage-site.component';
import { ManageOrgaDetailsComponent } from './manage-orga/manage-orga-details/manage-orga-details.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    HomeCardComponent,
    GosComponent,
    FiltersSmallComponent,
    MessageComponent,
    FiltersComponent,
    CommentComponent,
    SiteComponent,
    SiteDetailsComponent,
    NotifyComponent,
    FacebookComponent,
    LoginComponent,
    SignupComponent,
    MemberComponent,
    SiteCreatorComponent,
    OrgaCreatorComponent,
    ConfirmAddressComponent,
    HomeFooterComponent,
    UserComponent,
    DialogDeleteComponent,
    DialogModifyComponent,
    MyDemandsComponent,
    DemandComponent,
    AccountAlreadyCreatedComponent,
    DemandFormComponent,
    SearchBarComponent,
    TwitterComponent,
    MobileComponent,
    ManageOrgaComponent,
    SitesComponent,
    ManageSiteComponent,
    ManageOrgaDetailsComponent,
  ],
  imports: [
    FlexLayoutModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: environment.mapsApiKey
    }),
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    ReactiveFormsModule,
  ],
  providers: [GoogleMapsAPIWrapper,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    {provide: MAT_DATE_LOCALE, useValue: 'fr'},
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
  ],
  entryComponents: [
    SiteDetailsComponent,
    ConfirmAddressComponent,
    DialogDeleteComponent,
    DialogModifyComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
