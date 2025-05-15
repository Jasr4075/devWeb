import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"
import { NavbarComponent } from '../components/navbar.component';
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    NavbarComponent,
    NgbPaginationModule,
    NgbAlertModule,
    FontAwesomeModule,
  ],
  template: `
      <app-navbar></app-navbar> <!-- Aquí se renderiza el navbar -->

    <nav>
      <!-- <a routerLink="/">Home</a>
      <a routerLink="/sobre">Sobre</a> -->
    </nav>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {}