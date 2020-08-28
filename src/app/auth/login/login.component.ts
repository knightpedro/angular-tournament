import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  returnUrl: string;
  submitting = false;
  loginFailure = false;

  constructor(
    private auth: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    this.submitting = true;
    this.loginFailure = false;
    this.auth.login(this.username, this.password).subscribe((user) => {
      if (user) {
        this.router.navigateByUrl(this.returnUrl);
      } else {
        this.loginFailure = true;
        form.resetForm();
      }
      this.submitting = false;
    });
  }
}
