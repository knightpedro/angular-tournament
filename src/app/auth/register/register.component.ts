import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { AuthService } from 'src/app/core';
import { Router } from '@angular/router';
import { CrossFieldErrorStateMatcher } from 'src/app/shared';
import { debounceTime } from 'rxjs/operators';

function passwordMatch(
  control: AbstractControl
): { [key: string]: boolean } | null {
  const passwordControl = control.get('password');
  const confirmPasswordControl = control.get('confirmPassword');
  if (
    passwordControl &&
    confirmPasswordControl &&
    confirmPasswordControl.value
  ) {
    if (passwordControl.value !== confirmPasswordControl.value) {
      return { passwordMatch: true };
    }
  }
  return null;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  submitting = false;
  registrationFailure = false;
  crossFieldErrorStateMatcher = new CrossFieldErrorStateMatcher();

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      username: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(16),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
      passwordGroup: this.fb.group(
        {
          password: [
            '',
            [
              Validators.required,
              Validators.minLength(4),
              Validators.maxLength(16),
            ],
          ],
          confirmPassword: ['', Validators.required],
        },
        { validators: [passwordMatch] }
      ),
    });
    this.form
      .get('passwordGroup')
      .valueChanges.pipe(debounceTime(2000))
      .subscribe((v) => console.log(v));
  }

  onSubmit() {
    console.log(this.form);
    if (!this.form.valid) return;
    this.submitting = true;
    this.registrationFailure = false;
    this.auth.register(this.form.value).subscribe((user) => {
      if (user) {
        this.router.navigateByUrl('/');
      } else {
        this.registrationFailure = true;
      }
      this.submitting = false;
    });
  }
}
