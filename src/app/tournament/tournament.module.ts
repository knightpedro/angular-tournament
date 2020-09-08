import { NgModule } from '@angular/core';
import { TournamentRoutingModule } from './tournament-routing.module';
import { SharedModule } from '../shared';
import { CompetitorListComponent } from './competitor-list/competitor-list.component';

@NgModule({
  imports: [SharedModule, TournamentRoutingModule],
  declarations: [TournamentRoutingModule.Components, CompetitorListComponent],
})
export class TournamentModule {}
