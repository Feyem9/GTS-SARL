import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = async () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  // Attendre que Firebase ait vérifié la session (max 3s)
  if (!authService.isInitialized) {
    await new Promise<void>((resolve) => {
      const interval = setInterval(() => {
        if (authService.isInitialized) {
          clearInterval(interval);
          resolve();
        }
      }, 50);
      setTimeout(() => { clearInterval(interval); resolve(); }, 3000);
    });
  }

  if (authService.isAuthenticated) {
    return true;
  }

  router.navigate(['/login'], {
    queryParams: { message: 'Please sign in first' }
  });
  return false;
};
