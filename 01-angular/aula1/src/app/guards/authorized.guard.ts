import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthorizationService } from '../services/authorization.service';

@Injectable({
  providedIn: 'root',
})
export class AuthorizedGuard {
  constructor(
    private authorizationService: AuthorizationService,
    private routerService: Router
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const isUserLoggedIn = this.authorizationService.getLoginStatus();

    if (isUserLoggedIn) {
      return true;
    }

    this.routerService.navigate(['/login']);

    return false;
  }
}
