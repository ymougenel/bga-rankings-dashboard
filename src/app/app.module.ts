import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PlayerProfileComponent } from './components/player-profile/player-profile.component';
import {HttpClientModule} from "@angular/common/http";
import { PlayerGraphComponent } from './components/player-graph/player-graph.component';
import {ChartsModule} from "ng2-charts";
import {CoreModule} from "./core/core.module";
import {FormsModule} from "@angular/forms";
import { PlayerRankingtableComponent } from './components/player-rankingtable/player-rankingtable.component';
import {PlayerCountryComponent} from "./components/commun/player-country/player-country.component";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PlayerProfileComponent,
    PlayerGraphComponent,
    PlayerRankingtableComponent,
    PlayerCountryComponent,
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    AppRoutingModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
