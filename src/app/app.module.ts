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
import { FormsModule } from '@angular/forms';
import { OrgaComponent } from './orga/orga.component';
import {AgmCoreModule, GoogleMapsAPIWrapper} from '@agm/core';
import { OrgaDetailsComponent } from './orga/orga-details/orga-details.component';
import { NotifyComponent } from './notify/notify.component';
import { FacebookComponent } from './notify/facebook/facebook.component';
import {HttpClientModule} from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

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
    OrgaComponent,
    OrgaDetailsComponent,
    NotifyComponent,
    FacebookComponent,
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
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [GoogleMapsAPIWrapper],
  entryComponents: [
    OrgaDetailsComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
