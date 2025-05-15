import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { RouterModule } from "@angular/router"
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


import { DashboardComponent } from "./dashboard.component"

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: "", component: DashboardComponent }]),
    FontAwesomeModule,
  ],
  exports: [DashboardComponent],
})
export class DashboardModule {}
