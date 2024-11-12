import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HomeComponent } from './component/home/home.component'; 
import { CartComponent } from './component/cart/cart.component'; 

import { routes } from './app.routes';

export const appConfig = {
  providers: [
    provideRouter([
      { path: '', redirectTo: 'products', pathMatch: 'full' },
      { path: 'products', component: HomeComponent },
      { path: 'cart', component: CartComponent }
    ])
  ]
};