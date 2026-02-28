import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { Observable } from 'rxjs';
import { Order, CreateOrderDTO } from '@core/models/order.model';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private apiUrl = environment.microservices.orderServiceUrl;

  constructor(private httpService: HttpService) {}

  /**
   * Obtiene todos los pedidos
   */
  getAllOrders(): Observable<Order[]> {
    return this.httpService.get<Order[]>(`${this.apiUrl}/orders`);
  }

  /**
   * Obtiene un pedido por ID
   */
  getOrderById(id: string): Observable<Order> {
    return this.httpService.get<Order>(`${this.apiUrl}/orders/${id}`);
  }

  /**
   * Crea un nuevo pedido
   */
  createOrder(order: CreateOrderDTO): Observable<Order> {
    return this.httpService.post<Order>(`${this.apiUrl}/orders`, order);
  }

  /**
   * Actualiza un pedido
   */
  updateOrder(id: string, order: Partial<Order>): Observable<Order> {
    return this.httpService.put<Order>(`${this.apiUrl}/orders/${id}`, order);
  }

  /**
   * Obtiene pedidos por usuario
   */
  getOrdersByUser(userId: string): Observable<Order[]> {
    return this.httpService.get<Order[]>(
      `${this.apiUrl}/orders/user/${userId}`
    );
  }

  /**
   * Obtiene pedidos por estado
   */
  getOrdersByStatus(status: string): Observable<Order[]> {
    return this.httpService.get<Order[]>(
      `${this.apiUrl}/orders/status/${status}`
    );
  }

  /**
   * Cancela un pedido
   */
  cancelOrder(id: string): Observable<Order> {
    return this.httpService.put<Order>(
      `${this.apiUrl}/orders/${id}/cancel`,
      {}
    );
  }
}
