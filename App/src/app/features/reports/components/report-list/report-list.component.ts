import { Component, OnInit } from '@angular/core';
import { ReportService } from '../../services/report.service';
import { Report } from '@core/models/report.model';

@Component({
  selector: 'app-report-list',
  templateUrl: './report-list.component.html',
  styleUrls: ['./report-list.component.css']
})
export class ReportListComponent implements OnInit {
  reports: Report[] = [];
  isLoading = false;
  errorMessage = '';

  constructor(private reportService: ReportService) {}

  ngOnInit(): void {
    this.loadReports();
  }

  loadReports(): void {
    this.isLoading = true;
    this.reportService.getAllReports().subscribe({
      next: (data) => {
        this.reports = data;
        this.isLoading = false;
      },
      error: (error) => {
        this.errorMessage = 'Error al cargar reportes: ' + error.message;
        this.isLoading = false;
      }
    });
  }

  getTypeIcon(type: string): string {
    const iconMap: { [key: string]: string } = {
      sales: '📊',
      users: '👥',
      inventory: '📦',
      performance: '⚡'
    };
    return iconMap[type] || '📄';
  }
}
