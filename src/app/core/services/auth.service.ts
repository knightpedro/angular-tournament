import { Injectable } from '@angular/core';
import { User } from '../models';

@Injectable()
export class AuthService {
  private currentUser: User;

  login(username: string, password: string) {
    this.currentUser = { id: '1', name: username, email: 'user@test.com' };
  }

  logout() {
    this.currentUser = null;
  }

  isAuthenticated() {
    return !!this.currentUser;
  }
}
