export interface Report {
  id: string;
  name: string;
  type: 'sales' | 'users' | 'inventory' | 'performance';
  description: string;
  generatedAt: Date;
  data: any;
}

export interface ReportRequest {
  type: string;
  startDate?: Date;
  endDate?: Date;
  filters?: any;
}

export interface ReportResponse {
  id: string;
  name: string;
  type: string;
  generatedAt: string;
  data: any;
}
