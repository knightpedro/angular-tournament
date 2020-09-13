import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ScoringMethod, StageFormat, ValidatorsService } from '../../core';

@Component({
  templateUrl: './create-tournament.component.html',
  styleUrls: ['./create-tournament.component.scss'],
})
export class CreateTournamentComponent implements AfterViewInit, OnInit {
  form: FormGroup;
  step = 0;
  formatOptions = Object.values(StageFormat);
  private readonly minPools = 2;

  get competitors(): string[] {
    return this.form.get('competitors').value;
  }

  get isRoundRobin(): boolean {
    return this.form.get('format').value === StageFormat.RoundRobin;
  }

  @ViewChild('nameInput') nameInput: ElementRef;

  constructor(
    private fb: FormBuilder,
    private validators: ValidatorsService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      details: this.fb.group({
        name: ['', Validators.required],
        scoring: ScoringMethod.HighestWins,
      }),
      competitors: [[], this.validators.minLengthArray(4)],
      format: StageFormat.RoundRobin,
      roundRobin: this.fb.group({
        rounds: [
          1,
          [Validators.required, Validators.min(1), Validators.max(4)],
        ],
        pools: false,
        poolCount: this.minPools,
      }),
    });
  }

  ngAfterViewInit(): void {
    this.nameInput.nativeElement.focus();
    this.cdr.detectChanges();
  }

  nextStep(): void {
    this.step++;
  }

  prevStep(): void {
    this.step--;
  }

  setStep(step: number): void {
    this.step = step;
  }

  addCompetitor(name: string) {
    if (!name) return;
    this.form.patchValue({
      competitors: this.competitors
        .concat(name)
        .sort((a, b) => a.localeCompare(b)),
    });
    this.updatePoolCountValidation();
  }

  removeCompetitor(index: number) {
    this.form.patchValue({
      competitors: this.competitors.filter((_, i) => i !== index),
    });
    this.updatePoolCountValidation();
  }

  updatePoolCountValidation() {
    const maxPoolCount = Math.max(
      Math.floor(this.competitors.length / 2),
      this.minPools
    );
    const poolCountControl = this.form.get('roundRobin.poolCount');
    poolCountControl.setValidators([
      Validators.required,
      Validators.min(this.minPools),
      Validators.max(maxPoolCount),
    ]);
    poolCountControl.updateValueAndValidity();
  }

  resetRoundRobin() {
    this.form.get('roundRobin').patchValue({
      rounds: 1,
      pools: false,
      poolCount: this.minPools,
    });
  }

  resetPoolCount() {
    this.form.get('roundRobin').patchValue({
      poolCount: this.minPools,
    });
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
