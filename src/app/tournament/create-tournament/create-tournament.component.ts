import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ScoringMethod } from '../../core';

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
    });
  }

  addCompetitor(name: string) {
    if (!name) return;
    this.competitors.push(name);
    this.competitors.sort((a, b) => a.localeCompare(b));
  }

  removeCompetitor(index: number) {
    this.competitors = this.competitors.filter((_, i) => i !== index);
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.form.value);
  }
}
