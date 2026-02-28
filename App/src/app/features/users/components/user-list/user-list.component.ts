import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '@core/models/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  isLoading = false;
  errorMessage = '';
  searchQuery = '';

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.isLoading = true;
    this.errorMessage = '';

    this.userService.getAllUsers().subscribe({
      next: (data) => {
        this.users = data;
        this.isLoading = false;
      },
      error: (error) => {
        this.errorMessage = 'Error al cargar usuarios: ' + error.message;
        this.isLoading = false;
      }
    });
  }

  searchUsers(): void {
    if (this.searchQuery.trim()) {
      this.isLoading = true;
      this.userService.searchUsers(this.searchQuery).subscribe({
        next: (data) => {
          this.users = data;
          this.isLoading = false;
        },
        error: (error) => {
          this.errorMessage = 'Error en la búsqueda: ' + error.message;
          this.isLoading = false;
        }
      });
    } else {
      this.loadUsers();
    }
  }

  viewUser(id: string): void {
    this.router.navigate(['/users', id]);
  }

  editUser(id: string): void {
    this.router.navigate(['/users', id, 'edit']);
  }

  deleteUser(id: string): void {
    if (confirm('¿Estás seguro de que deseas eliminar este usuario?')) {
      this.userService.deleteUser(id).subscribe({
        next: () => {
          this.users = this.users.filter(u => u.id !== id);
        },
        error: (error) => {
          this.errorMessage = 'Error al eliminar: ' + error.message;
        }
      });
    }
  }

  createNewUser(): void {
    this.router.navigate(['/users/new']);
  }
}
