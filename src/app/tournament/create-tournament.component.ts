import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ScoringMethod } from '../core';

@Component({
  templateUrl: './create-tournament.component.html',
  styleUrls: ['./create-tournament.component.scss'],
})
export class CreateTournamentComponent {
  name: string;
  scoring = ScoringMethod.HighestWins;

  constructor() {}

  onSubmit(form: NgForm) {
    console.log('Submitting');
  }
}
