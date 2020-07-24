import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {PlayerProfileComponent} from "./player-profile/player-profile.component";
import {PlayerGraphComponent} from "./player-graph/player-graph.component";


const routes: Routes = [
  {path: '', redirectTo: '/profile', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'profile', component: PlayerProfileComponent},
  {path: 'graph', component: PlayerGraphComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
