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
import { FilterBigComponent } from './demands/filter-big/filter-big.component';
import { CommentComponent } from './demands/demand/comment/comment.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    HomeCardComponent,
    DemandsComponent,
    FiltersSmallComponent,
    DemandComponent,
    FilterBigComponent,
    CommentComponent,
  ],
  imports: [
    FlexLayoutModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
