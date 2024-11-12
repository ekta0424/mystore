import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CartComponent } from './component/cart/cart.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    {path: 'dashboard', component: DashboardComponent},
    {path:'', redirectTo:'products',pathMatch:'full'},
    {path:'products', component: HomeComponent},
    {path:'cart', component: CartComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes), ],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }