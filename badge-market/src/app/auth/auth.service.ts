import { Injectable, Injector } from '@angular/core';
import { loginForm } from '../login/auth';
import {
  createUserWithEmailAndPassword, getAuth,
  signInWithEmailAndPassword, signOut, onAuthStateChanged
} from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { registerForm } from '../register/auth';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuthenticated: boolean = false;
  isAdmin: boolean = false;
  isLoading: boolean = false;
  isInitialized: boolean = false;  // true quand Firebase a fini de vérifier la session
  passwordMached: boolean = true;
  errorMessage: string = '';

  constructor(private router: Router, private injector: Injector) {
    this.initAuthListener();
  }

  // Écoute l'état Firebase Auth au démarrage — persiste la session après refresh
  private initAuthListener(): void {
    const auth = getAuth();
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        this.isAuthenticated = true;
        // Vérifier si admin
        try {
          const db = getFirestore();
          const userDoc = await getDoc(doc(db, 'users', user.uid));
          this.isAdmin = userDoc.exists() && userDoc.data()['isAdmin'] === true;
        } catch {
          this.isAdmin = false;
        }
        // Charger le panier
        try {
          const cartService = this.injector.get(CartService);
          cartService.loadFromFirestore();
        } catch { /* ignore */ }
      } else {
        this.isAuthenticated = false;
        this.isAdmin = false;
      }
      this.isInitialized = true;
    });
  }

  getCurrentUserId(): string | null {
    const auth = getAuth();
    return auth.currentUser ? auth.currentUser.uid : null;
  }

  login(form: loginForm) {
    if (this.isLoading) return;
    this.isLoading = true;
    this.errorMessage = '';

    const auth = getAuth();
    signInWithEmailAndPassword(auth, form.email, form.password)
      .then(() => {
        // onAuthStateChanged s'occupe de mettre isAuthenticated = true
        this.router.navigate(['products']);
      })
      .catch((error) => {
        this.isAuthenticated = false;
        this.errorMessage = this.getErrorMessage(error.code);
      })
      .finally(() => (this.isLoading = false));
  }

  register(form: registerForm) {
    if (this.isLoading) return;
    this.isLoading = true;

    if (form.password !== form.confirmPassword) {
      this.passwordMached = false;
      this.isLoading = false;
      return;
    }

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, form.email, form.password)
      .then(() => {
        this.router.navigate(['login']);
      })
      .catch((error) => {
        this.isAuthenticated = false;
        this.errorMessage = this.getErrorMessage(error.code);
      })
      .finally(() => (this.isLoading = false));
  }

  logout() {
    const auth = getAuth();
    signOut(auth).then(() => {
      this.router.navigate(['login']);
    });
  }

  private getErrorMessage(code: string): string {
    switch (code) {
      case 'auth/user-not-found':      return 'No account found with this email.';
      case 'auth/wrong-password':      return 'Incorrect password.';
      case 'auth/invalid-email':       return 'Invalid email address.';
      case 'auth/email-already-in-use': return 'This email is already registered.';
      case 'auth/weak-password':       return 'Password must be at least 6 characters.';
      case 'auth/invalid-credential':  return 'Invalid email or password.';
      default:                         return 'An error occurred. Please try again.';
    }
  }
}
