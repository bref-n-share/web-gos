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
import { DemandsComponent } from './demands/demands.component';
import { FiltersSmallComponent } from './demands/filters-small/filters-small.component';
import { DemandComponent } from './demands/demand/demand.component';
import { FiltersComponent } from './demands/filters/filters.component';
import { CommentComponent } from './demands/demand/comment/comment.component';
import { FormsModule } from '@angular/forms';
import { OrgaComponent } from './orga/orga.component';
import {AgmCoreModule, GoogleMapsAPIWrapper} from '@agm/core';
import { OrgaDetailsComponent } from './orga/orga-details/orga-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    HomeCardComponent,
    DemandsComponent,
    FiltersSmallComponent,
    DemandComponent,
    FiltersComponent,
    CommentComponent,
    OrgaComponent,
    OrgaDetailsComponent,
  ],
  imports: [
    FlexLayoutModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB_Y-8V5yWENTbHFAIkIKRs3Kjn11bUimw'
    })
  ],
  providers: [GoogleMapsAPIWrapper],
  entryComponents: [
    OrgaDetailsComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
