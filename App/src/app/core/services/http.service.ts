/// <reference types="@angular/common/types/http" />
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, timeout } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http: HttpClient) {}

  /**
   * realiza una solicitud GET
   */
  get<T>(url: string, options: any = {}): Observable<T> {
    return this.http.get<T>(url, { ...options, observe: 'body' as const }).pipe(
      timeout(5000),
      retry({ count: 3, delay: 1000 }),
      catchError(this.handleError)
    ) as Observable<T>;
  }

  /**
   * Realiza una solicitud POST
   */
  post<T>(url: string, body: any, options: any = {}): Observable<T> {
    return this.http.post<T>(url, body, { ...options, observe: 'body' as const }).pipe(
      timeout(5000),
      catchError(this.handleError)
    ) as Observable<T>;
  }

  /**
   * Realiza una solicitud PUT
   */
  put<T>(url: string, body: any, options: any = {}): Observable<T> {
    return this.http.put<T>(url, body, { ...options, observe: 'body' as const }).pipe(
      timeout(5000),
      catchError(this.handleError)
    ) as Observable<T>;
  }

  /**
   * Realiza una solicitud DELETE
   */
  delete<T>(url: string, options: any = {}): Observable<T> {
    return this.http.delete<T>(url, { ...options, observe: 'body' as const }).pipe(
      timeout(5000),
      catchError(this.handleError)
    ) as Observable<T>;
  }

  /**
   * Maneja errores de HTTP
   */
  private handleError(error: any) {
    let errorMessage = 'Error en la solicitud HTTP';

    if (error.error instanceof ErrorEvent) {
      // Error del cliente
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Error del servidor
      errorMessage = `Status: ${error.status}\nMensaje: ${error.error?.message || error.message}`;
    }

    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}
