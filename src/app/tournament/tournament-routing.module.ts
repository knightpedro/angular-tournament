import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateTournamentComponent } from './create-tournament/create-tournament.component';

const routes: Routes = [
  {
    path: 'create',
    component: CreateTournamentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TournamentRoutingModule {
  static Components = [CreateTournamentComponent];
}
