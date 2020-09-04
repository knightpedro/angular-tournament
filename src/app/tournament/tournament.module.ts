import { NgModule } from '@angular/core';
import { TournamentRoutingModule } from './tournament-routing.module';
import { SharedModule } from '../shared';
import { CreateRoundRobinComponent } from './round-robin/create-round-robin/create-round-robin.component';

@NgModule({
  imports: [SharedModule, TournamentRoutingModule],
  declarations: [TournamentRoutingModule.Components, CreateRoundRobinComponent],
})
export class TournamentModule {}
