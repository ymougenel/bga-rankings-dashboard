import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {PlayerProfileComponent} from "./components/player-profile/player-profile.component";
import {PlayerGraphComponent} from "./components/player-graph/player-graph.component";


const routes: Routes = [
  {path: '', redirectTo: '/dashboard/Piranas', pathMatch: 'full'},
  {path: 'dashboard/:playername', component: DashboardComponent},
  {path: 'profile', component: PlayerProfileComponent},
  {path: 'graph', component: PlayerGraphComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
