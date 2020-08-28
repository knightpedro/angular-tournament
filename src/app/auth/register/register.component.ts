import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  username: string;
  email: string;
  password: string;
  submitting = false;
  registrationFailure = false;

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    if (!form.valid) return;
    this.submitting = true;
    this.registrationFailure = false;
    this.auth.register(form.value).subscribe((user) => {
      if (user) {
        this.router.navigateByUrl('/');
      } else {
        this.registrationFailure = true;
        form.resetForm();
      }
      this.submitting = false;
    });
  }
}
