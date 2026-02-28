import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { Observable } from 'rxjs';
import { Product, CreateProductDTO } from '@core/models/product.model';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = environment.microservices.productServiceUrl;

  constructor(private httpService: HttpService) {}

  /**
   * Obtiene todos los productos
   */
  getAllProducts(): Observable<Product[]> {
    return this.httpService.get<Product[]>(`${this.apiUrl}/products`);
  }

  /**
   * Obtiene un producto por ID
   */
  getProductById(id: string): Observable<Product> {
    return this.httpService.get<Product>(`${this.apiUrl}/products/${id}`);
  }

  /**
   * Crea un nuevo producto
   */
  createProduct(product: CreateProductDTO): Observable<Product> {
    return this.httpService.post<Product>(`${this.apiUrl}/products`, product);
  }

  /**
   * Actualiza un producto
   */
  updateProduct(id: string, product: Partial<Product>): Observable<Product> {
    return this.httpService.put<Product>(`${this.apiUrl}/products/${id}`, product);
  }

  /**
   * Elimina un producto
   */
  deleteProduct(id: string): Observable<any> {
    return this.httpService.delete<any>(`${this.apiUrl}/products/${id}`);
  }

  /**
   * Obtiene productos por categoría
   */
  getProductsByCategory(category: string): Observable<Product[]> {
    return this.httpService.get<Product[]>(
      `${this.apiUrl}/products/category/${category}`
    );
  }

  /**
   * Busca productos
   */
  searchProducts(query: string): Observable<Product[]> {
    return this.httpService.get<Product[]>(
      `${this.apiUrl}/products/search?q=${query}`
    );
  }
}
