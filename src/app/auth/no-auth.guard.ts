import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from '../core';
import { Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';

@Injectable()
export class NoAuthGuard implements CanActivate {
  constructor(private auth: AuthService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.auth.isAuthenticated.pipe(
      take(1),
      map((isAuthenticated) => !isAuthenticated)
    );
  }
}
