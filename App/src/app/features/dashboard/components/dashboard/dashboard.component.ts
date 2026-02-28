import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  modules = [
    {
      title: 'Usuarios',
      icon: '👥',
      description: 'Gestión de usuarios del sistema',
      route: '/users',
      color: '#667eea'
    },
    {
      title: 'Productos',
      icon: '📦',
      description: 'Catálogo y gestión de productos',
      route: '/products',
      color: '#764ba2'
    },
    {
      title: 'Pedidos',
      icon: '🛒',
      description: 'Gestión de órdenes y pedidos',
      route: '/orders',
      color: '#f093fb'
    },
    {
      title: 'Reportes',
      icon: '📊',
      description: 'Análisis y reportes del sistema',
      route: '/reports',
      color: '#4facfe'
    }
  ];

  constructor(private router: Router) {}

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}
