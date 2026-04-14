import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './app/firebase/firebase.config';
import { AppModule } from './app/app.module';

// Firebase DOIT être initialisé avant tout le reste
initializeApp(firebaseConfig);

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
