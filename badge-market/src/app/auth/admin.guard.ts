import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from './auth.service';

export const adminGuard: CanActivateFn = async () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  // Attendre que Firebase ET Firestore aient fini (isInitialized = true après getDoc)
  if (!authService.isInitialized) {
    await new Promise<void>((resolve) => {
      const interval = setInterval(() => {
        if (authService.isInitialized) {
          clearInterval(interval);
          resolve();
        }
      }, 50);
      setTimeout(() => { clearInterval(interval); resolve(); }, 5000);
    });
  }

  if (authService.isAuthenticated && authService.isAdmin) {
    return true;
  }

  router.navigate(['/home']);
  return false;
};
