import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  templateUrl: './create-schedule.component.html',
  styleUrls: ['./create-schedule.component.scss'],
})
export class CreateScheduleComponent {
  tournamentForm = this.fb.group({
    tournamentName: ['', [Validators.required]],
    competitorName: [''],
    competitors: [[], [Validators.required, Validators.minLength(2)]],
  });

  constructor(private fb: FormBuilder) {}

  addCompetitor() {
    const competitor = this.tournamentForm.get('competitorName').value;
    if (!competitor) return;
    let competitors: string[] = this.tournamentForm
      .get('competitors')
      .value.concat(competitor);
    competitors.sort((a, b) => a.localeCompare(b));
    this.tournamentForm.patchValue({
      competitors,
      competitorName: '',
    });
  }

  onSubmit() {
    console.log('Submitting');
  }
}
