import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {


  isLoggedIn$: Observable<boolean>;
  logstatus : boolean;

  constructor(private _auth: AuthService, private _router: Router, private _firebaseAuth: AngularFireAuth) {
    this.isLoggedIn$ = _auth.isLoggedIn();

    this.isLoggedIn$.subscribe(res => {
      if(res){
        this.logstatus = true;
        console.log('user  signed in');
      }else{
        this.logstatus = false;
        console.log('user not signed in');
        this._router.navigate([''])
      }
    });
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.isLoggedIn$){
      return true;
    }else{
      this._router.navigate(['']);
      return false;
    }
  }
}
