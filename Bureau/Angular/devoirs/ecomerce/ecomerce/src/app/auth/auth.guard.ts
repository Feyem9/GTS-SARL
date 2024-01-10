import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = (route, state) => {
const authService = inject(AuthService)

if (authService.isAuthenticated){
  const router = new Router();
  router.navigate(['register'],{
    queryParams: {message: 'please sign in '},
    // alert ('please you need to sign in first'),
  })
  return true;
  }


  return authService.isAuthenticated;
};

