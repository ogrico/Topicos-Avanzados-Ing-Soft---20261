import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { Observable } from 'rxjs';
import { User, CreateUserDTO } from '@core/models/user.model';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = environment.microservices.userServiceUrl;

  constructor(private httpService: HttpService) {}

  /**
   * Obtiene todos los usuarios
   */
  getAllUsers(): Observable<User[]> {
    return this.httpService.get<User[]>(`${this.apiUrl}/users`);
  }

  /**
   * Obtiene un usuario por ID
   */
  getUserById(id: string): Observable<User> {
    return this.httpService.get<User>(`${this.apiUrl}/users/${id}`);
  }

  /**
   * Crea un nuevo usuario
   */
  createUser(user: CreateUserDTO): Observable<User> {
    return this.httpService.post<User>(`${this.apiUrl}/users`, user);
  }

  /**
   * Actualiza un usuario
   */
  updateUser(id: string, user: Partial<User>): Observable<User> {
    return this.httpService.put<User>(`${this.apiUrl}/users/${id}`, user);
  }

  /**
   * Elimina un usuario
   */
  deleteUser(id: string): Observable<any> {
    return this.httpService.delete<any>(`${this.apiUrl}/users/${id}`);
  }

  /**
   * Busca usuarios por nombre
   */
  searchUsers(query: string): Observable<User[]> {
    return this.httpService.get<User[]>(`${this.apiUrl}/users/search?q=${query}`);
  }
}
