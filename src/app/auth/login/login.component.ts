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
  submitting: boolean = false;
  returnUrl: string;

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
    this.auth.login(this.username, this.password).subscribe(() => {
      this.router.navigateByUrl(this.returnUrl);
      this.submitting = false;
    });
  }
}
