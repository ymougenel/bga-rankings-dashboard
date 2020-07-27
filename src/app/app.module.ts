import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PlayerProfileComponent } from './player-profile/player-profile.component';
import {HttpClientModule} from "@angular/common/http";
import { PlayerGraphComponent } from './player-graph/player-graph.component';
import {ChartsModule} from "ng2-charts";
import {CoreModule} from "./core/core.module";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PlayerProfileComponent,
    PlayerGraphComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    AppRoutingModule,
    HttpClientModule,
    AppRoutingModule,
    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
