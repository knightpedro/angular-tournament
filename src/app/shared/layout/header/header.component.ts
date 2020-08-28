import { Component, OnInit } from '@angular/core';
import { AuthService, User } from 'src/app/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  user: User;

  constructor(
    private auth: AuthService,
    private router: Router,
    private snackbar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.auth.currentUser.subscribe((user) => {
      this.user = user;
    });
  }

  logout() {
    this.auth.logout();
    this.router.navigateByUrl('/');
    this.snackbar.open('Logged out', null, {
      duration: 5000,
    });
  }
}
