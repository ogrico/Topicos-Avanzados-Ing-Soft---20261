import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';

import { ReportListComponent } from './components/report-list/report-list.component';

@NgModule({
  declarations: [ReportListComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: ReportListComponent
      }
    ])
  ]
})
export class ReportsModule {}
