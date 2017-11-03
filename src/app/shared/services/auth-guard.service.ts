import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UserService } from './user.service';

@Injectable()
export class AuthGuardService implements CanActivate{
  
  isUserLogged : boolean=false;
  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    return this.userService.isAuthenticated.take(1);
  }

  constructor(private router : Router,private userService : UserService) { 
    this.userService.isAuthenticated
    .subscribe(status => {
      if(status){
        console.log('Setting hhhhh')
        this.isUserLogged = true;
      }
      else{
        this.isUserLogged = false;
      }
    })
  }

}
