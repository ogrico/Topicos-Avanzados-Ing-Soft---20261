# Microservices Demo App - Angular

Una aplicación Angular bien estructurada diseñada para practicar **Arquitectura de Microservicios**. La app está lista para conectarse con 4 microservicios serverless independientes.

## 🏗️ Estructura del Proyecto

```
App/
├── src/
│   ├── app/
│   │   ├── core/                    # Servicios, guards, interceptores
│   │   │   ├── guards/
│   │   │   ├── interceptors/
│   │   │   ├── models/
│   │   │   └── services/
│   │   ├── features/                # Módulos feature (lazy-loaded)
│   │   │   ├── auth/
│   │   │   ├── dashboard/
│   │   │   ├── users/               # Conecta con User Service
│   │   │   ├── products/            # Conecta con Product Service
│   │   │   ├── orders/              # Conecta con Order Service
│   │   │   └── reports/             # Conecta con Report Service
│   │   ├── shared/                  # Componentes compartidos
│   │   │   └── components/
│   │   ├── config/                  # Configuración de microservicios
│   │   ├── app.module.ts
│   │   └── app-routing.module.ts
│   ├── environments/                # Configuración por entorno
│   ├── styles.css                   # Estilos globales
│   └── main.ts
├── package.json
├── tsconfig.json
└── angular.json
```

## 📋 Características

### ✅ Funcionalidades Implementadas

- **Autenticación**: Sistema de login con AuthGuard
- **Gestión de Usuarios**: CRUD completo + búsqueda
- **Catálogo de Productos**: Visualización en grid responsivo
- **Gestión de Pedidos**: Lista de órdenes con estados
- **Reportes**: Dashboard de reportes con múltiples tipos
- **Dashboard**: Panel principal con navegación
- **Responsive Design**: Compatible con móviles, tablets y desktop
- **HTTP Interceptor**: Automático para añadir tokens
- **Error Handling**: Manejo centralizado de errores
- **Loading Spinner**: Indicador visual de carga

### 🔌 Microservicios Serverless

La aplicación está lista para conectarse a 4 microservicios independientes:

| Servicio | Descripción | Endpoints Esperados |
|----------|-------------|-------------------|
| **User Service** | Gestión de usuarios | GET, POST, PUT, DELETE `/users` |
| **Product Service** | Catálogo de productos | GET, POST, PUT, DELETE `/products` |
| **Order Service** | Gestión de pedidos | GET, POST, PUT `/orders` |
| **Report Service** | Reportes y análisis | GET `/reports`, POST `/reports/generate` |

## 🚀 Instalación y Configuración

### Requisitos
- Node.js 16+
- Angular CLI `npm install -g @angular/cli`

### Pasos

1. **Instalar dependencias**:
```bash
npm install
```

2. **Configurar URLs de microservicios**:

Edita `src/environments/environment.ts`:
```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api',
  microservices: {
    userServiceUrl: 'http://tu-user-service.com',
    productServiceUrl: 'http://tu-product-service.com',
    orderServiceUrl: 'http://tu-order-service.com',
    reportServiceUrl: 'http://tu-report-service.com'
  }
};
```

3. **Ejecutar la aplicación**:
```bash
ng serve
```
O con npm:
```bash
npm start
```

Abre `http://localhost:4200` en tu navegador.

4. **Login**: 
- Email: Cualquiera (ej: `usuario@example.com`)
- Contraseña: Mínimo 6 caracteres (ej: `123456`)

## 📁 Descripción de Módulos

### `@core`
Servicios y lógica compartida:
- **AuthService**: Gestión de autenticación
- **HttpService**: Wrapper para llamadas HTTP
- **UserService, ProductService, OrderService, ReportService**: Llamadas a microservicios

### `@features`
Módulos feature organizados por contexto:
- Cada módulo es lazy-loaded
- Contiene componentes, servicios y rutas locales
- Implementa la lógica de negocio específica

### `@shared`
Componentes reutilizables:
- **Navbar**: Navegación principal
- **Footer**: Pie de página
- **LoadingSpinner**: Indicador de carga

## 🔐 Seguridad

- **AuthGuard**: Protege rutas que requieren autenticación
- **HTTP Interceptor**: Automáticamente añade headers de autorización
- **Error 401**: Cierra sesión si el token expira

## 🎨 Estilos

- Diseño moderno con gradientes
- Paleta de colores: Púrpura (#667eea) y Violeta (#764ba2)
- Componentes responsive
- Compatible con luz y modalidades oscuras

## 📡 Ejemplo de Conexión a Microservicio

### UserService (src/app/features/users/services/user.service.ts):

```typescript
getAllUsers(): Observable<User[]> {
  return this.httpService.get<User[]>(`${this.apiUrl}/users`);
}

createUser(user: CreateUserDTO): Observable<User> {
  return this.httpService.post<User>(`${this.apiUrl}/users`, user);
}
```

Reemplaza `${this.apiUrl}` con la URL de tu microservicio serverless.

## 🔧 Configuración Avanzada

### Agregar Nuevo Microservicio

1. Crea el modelo en `src/app/core/models/`:
```typescript
export interface NewEntity {
  id: string;
  name: string;
}
```

2. Crea el servicio en `src/app/features/new-feature/services/`:
```typescript
@Injectable({ providedIn: 'root' })
export class NewService {
  constructor(private httpService: HttpService) {}
  
  getAll(): Observable<NewEntity[]> {
    return this.httpService.get<NewEntity[]>(`${this.apiUrl}/entities`);
  }
}
```

3. Crea el módulo lazy-loaded en `src/app/features/new-feature/`

4. Añade la ruta en `app-routing.module.ts`

## 📚 Recursos Útiles

- [Angular Documentation](https://angular.io/docs)
- [Microservices Architecture](https://microservices.io/)
- [RESTful API Design](https://restfulapi.net/)

## 🤝 Contribuciones

Este proyecto es para propósitos educativos. Siéntete libre de usarlo y modificarlo para tus prácticas de arquitectura de microservicios.

## 📝 Licencia

MIT - Libre para uso educativo

---

**¡Listo para practicar microservicios! 🚀**
