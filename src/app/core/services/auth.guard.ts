import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
  CanLoad,
  Route,
  UrlSegment,
} from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { tap, take } from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.checkLoggedIn(state.url);
  }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> {
    return this.checkLoggedIn(route.path);
  }

  private checkLoggedIn(returnUrl: string) {
    return this.auth.isAuthenticated.pipe(
      take(1),
      tap((isAuthenticated) => {
        if (!isAuthenticated) {
          this.router.navigate(['/login'], { queryParams: { returnUrl } });
        }
      })
    );
  }
}
