// app.routes.ts
import { Routes } from '@angular/router';
import { Home } from './pages/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FinancialReportComponent } from './pages/reports/financial-report.component';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'pag1', redirectTo: '', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'financial-report', component: FinancialReportComponent },
];