import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ScoringMethod } from '../core';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Component({
  templateUrl: './create-tournament.component.html',
  styleUrls: ['./create-tournament.component.scss'],
})
export class CreateTournamentComponent implements OnInit {
  form: FormGroup;
  submitted = false;
  competitors: string[] = [];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      scoring: ScoringMethod.HighestWins,
      competitor: '',
    });
  }

  addCompetitor() {
    const competitor = this.form.get('competitor').value;
    if (!competitor) return;
    this.competitors.push(competitor);
    this.competitors.sort((a, b) => a.localeCompare(b));
    this.form.patchValue({
      competitor: '',
    });
  }

  removeCompetitor(index: number) {
    this.competitors = this.competitors.filter((_, i) => i !== index);
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.form.value);
  }
}
