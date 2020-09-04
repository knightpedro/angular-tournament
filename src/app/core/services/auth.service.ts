import { Injectable } from '@angular/core';
import { User } from '../models';
import { Observable, of, BehaviorSubject } from 'rxjs';
import {
  delay,
  distinctUntilChanged,
  map,
  catchError,
  tap,
} from 'rxjs/operators';

@Injectable()
export class AuthService {
  private currentUserSubject = new BehaviorSubject<User>(null);
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);

  public currentUser = this.currentUserSubject
    .asObservable()
    .pipe(distinctUntilChanged());

  public isAuthenticated = this.isAuthenticatedSubject.asObservable();

  constructor() {
    this.populate();
  }

  login(username: string, password: string): Observable<User> {
    return of({ id: '1', username: username, email: 'user@test.com' }).pipe(
      delay(1000),
      catchError((err) => of(null)),
      map((user) => {
        this.setAuth(user);
        return user;
      })
    );
  }

  logout(): void {
    this.purgeAuth();
  }

  populate(): void {
    this.purgeAuth();
  }

  register(values): Observable<User> {
    return of(values).pipe(
      delay(1000),
      map((values) => values as User),
      catchError((err) => of(null)),
      tap((user) => {
        this.setAuth(user);
      })
    );
  }

  getCurrentUser(): User {
    return this.currentUserSubject.value;
  }

  private setAuth(user: User): void {
    this.currentUserSubject.next(user);
    this.isAuthenticatedSubject.next(true);
  }

  private purgeAuth(): void {
    this.currentUserSubject.next(null);
    this.isAuthenticatedSubject.next(false);
  }
}
