import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { Observable } from 'rxjs';
import { Report, ReportRequest } from '@core/models/report.model';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  private apiUrl = environment.microservices.reportServiceUrl;

  constructor(private httpService: HttpService) {}

  /**
   * Obtiene todos los reportes
   */
  getAllReports(): Observable<Report[]> {
    return this.httpService.get<Report[]>(`${this.apiUrl}/reports`);
  }

  /**
   * Obtiene un reporte por ID
   */
  getReportById(id: string): Observable<Report> {
    return this.httpService.get<Report>(`${this.apiUrl}/reports/${id}`);
  }

  /**
   * Genera un nuevo reporte
   */
  generateReport(request: ReportRequest): Observable<Report> {
    return this.httpService.post<Report>(`${this.apiUrl}/reports/generate`, request);
  }

  /**
   * Obtiene reportes por tipo
   */
  getReportsByType(type: string): Observable<Report[]> {
    return this.httpService.get<Report[]>(
      `${this.apiUrl}/reports/type/${type}`
    );
  }

  /**
   * Obtiene reporte de ventas
   */
  getSalesReport(startDate?: Date, endDate?: Date): Observable<Report> {
    let params = '';
    if (startDate) params += `?startDate=${startDate}`;
    if (endDate) params += `${params ? '&' : '?'}endDate=${endDate}`;

    return this.httpService.get<Report>(
      `${this.apiUrl}/reports/sales${params}`
    );
  }

  /**
   * Obtiene reporte de usuarios
   */
  getUsersReport(): Observable<Report> {
    return this.httpService.get<Report>(`${this.apiUrl}/reports/users`);
  }

  /**
   * Obtiene reporte de inventario
   */
  getInventoryReport(): Observable<Report> {
    return this.httpService.get<Report>(`${this.apiUrl}/reports/inventory`);
  }

  /**
   * Exporta un reporte en CSV
   */
  exportReportAsCSV(id: string): Observable<Blob> {
    return this.httpService.get<Blob>(
      `${this.apiUrl}/reports/${id}/export/csv`
    );
  }
}
