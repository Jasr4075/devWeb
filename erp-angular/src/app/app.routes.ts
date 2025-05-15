// app.routes.ts
import { Routes } from '@angular/router';
import { Home } from './pages/home.component';
import { Pag2 } from './pages/pag2.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'pag1', redirectTo: '', pathMatch: 'full' },
  { path: 'pag2', component: Pag2 },
  { path: 'dashboard', component: DashboardComponent },
];