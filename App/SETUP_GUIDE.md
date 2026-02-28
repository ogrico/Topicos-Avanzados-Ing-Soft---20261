# SETUP_GUIDE.md - Guía Completa de Configuración

## 🎯 Objetivo

Crear una aplicación Angular que se integre con 4 microservicios serverless independientes para practicar arquitectura de microservicios.

## 📋 Pasos de Configuración

### 1. Clonar o Descargar el Proyecto

```bash
cd /ruta/a/tu/proyecto
```

### 2. Instalar Dependencias

```bash
npm install
```

Si necesitas una versión específica de Angular, asegúrate de tener Node.js 16+ instalado:

```bash
node --version  # Verifica tu versión
npm --version
```

### 3. Configurar URLs de Microservicios

Edita `src/environments/environment.ts` para desarrollo:

```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api',
  microservices: {
    userServiceUrl: 'http://localhost:3001',      // Tu User Service
    productServiceUrl: 'http://localhost:3002',   // Tu Product Service
    orderServiceUrl: 'http://localhost:3003',     // Tu Order Service
    reportServiceUrl: 'http://localhost:3004'     // Tu Report Service
  }
};
```

Para producción, edita `src/environments/environment.prod.ts`:

```typescript
export const environment = {
  production: true,
  apiUrl: 'https://api.tudominio.com/api',
  microservices: {
    userServiceUrl: 'https://api.tudominio.com/users',
    productServiceUrl: 'https://api.tudominio.com/products',
    orderServiceUrl: 'https://api.tudominio.com/orders',
    reportServiceUrl: 'https://api.tudominio.com/reports'
  }
};
```

### 4. Ejecutar la Aplicación

#### Modo Desarrollo

```bash
ng serve
# O
npm start
```

La app estará disponible en `http://localhost:4200`

#### Modo Producción

```bash
ng build --configuration production
# O
npm run build
```

Los archivos compilados estarán en `dist/microservices-app/`

### 5. Credenciales de Demo

- **Email**: Cualquiera (ej: `usuario@example.com`)
- **Contraseña**: Mínimo 6 caracteres (ej: `123456`)

**Nota**: En desarrollo, el servicio de autenticación es simulado. Para producción, conéctalo con tu Auth Service.

## 🔧 Configuración Avanzada

### Habilitar CORS en tus Microservicios

Tus microservicios deben habilitar CORS para `http://localhost:4200`:

**Node.js/Express:**
```javascript
const cors = require('cors');
app.use(cors({
  origin: ['http://localhost:4200', 'https://tudominio.com'],
  credentials: true
}));
```

**Python/Flask:**
```python
from flask_cors import CORS
CORS(app, origins=['http://localhost:4200'])
```

**AWS Lambda/API Gateway:**
- En el recurso de API Gateway, añade CORS en las opciones
- Headers: `Content-Type, Authorization, X-Amz-Date, X-Api-Key`

### Configurar Autenticación Real

Si deseas conectar con un servicio de autenticación real:

1. Edita `src/app/core/services/auth.service.ts`
2. Reemplaza el método `login()` con una llamada HTTP real:

```typescript
login(email: string, password: string): Observable<User> {
  return this.httpService.post<User>(
    `${this.apiUrl}/auth/login`,
    { email, password }
  ).pipe(
    tap(user => {
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.currentUserSubject.next(user);
      this.isAuthenticatedSubject.next(true);
    })
  );
}
```

### Variables de Entorno

Crea un archivo `.env` (no versionado) para credenciales sensibles:

```
API_USER_SERVICE=http://localhost:3001
API_PRODUCT_SERVICE=http://localhost:3002
API_ORDER_SERVICE=http://localhost:3003
API_REPORT_SERVICE=http://localhost:3004
```

Luego carga estas variables con `dotenv`:

```bash
npm install dotenv
```

```typescript
import * as dotenv from 'dotenv';
dotenv.config();
```

## 📁 Estructura de Archivos Importantes

```
App/
├── src/
│   ├── app/
│   │   ├── config/
│   │   │   └── microservices.config.ts      ← Configuración centralizada
│   │   ├── core/
│   │   │   ├── services/
│   │   │   │   ├── http.service.ts          ← Wrapper HTTP
│   │   │   │   ├── auth.service.ts          ← Autenticación
│   │   │   │   ├── user.service.ts          ← Llamadas a User Service
│   │   │   │   ├── product.service.ts       ← Llamadas a Product Service
│   │   │   │   ├── order.service.ts         ← Llamadas a Order Service
│   │   │   │   └── report.service.ts        ← Llamadas a Report Service
│   │   │   └── interceptors/
│   │   │       └── http.interceptor.ts      ← Añade headers automáticamente
│   │   └── features/
│   │       ├── users/                       ← Módulo de Usuarios
│   │       ├── products/                    ← Módulo de Productos
│   │       ├── orders/                      ← Módulo de Pedidos
│   │       ├── reports/                     ← Módulo de Reportes
│   │       └── auth/                        ← Módulo de Autenticación
│   └── environments/
│       ├── environment.ts                   ← Configuración desarrollo
│       └── environment.prod.ts              ← Configuración producción
├── MICROSERVICES_API.md                     ← Especificación de endpoints
├── package.json
└── tsconfig.json
```

## 🧪 Pruebas

### Ejecutar Tests Unitarios

```bash
ng test
```

### Ejecutar Tests E2E

```bash
ng e2e
```

### Verificar Sintaxis

```bash
ng lint
```

## 🚀 Deployment

### Desplegar en Netlify

1. Construye el proyecto:
```bash
npm run build
```

2. Conecta tu repositorio Git en Netlify

3. Configura el build:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist/microservices-app`

### Desplegar en Vercel

```bash
npm install -g vercel
vercel
```

### Desplegar en AWS S3 + CloudFront

```bash
npm run build
aws s3 sync dist/microservices-app s3://tu-bucket-name
```

## 🐛 Troubleshooting

### Error: "Cannot find module '@angular/core'"
```bash
rm -rf node_modules package-lock.json
npm install
```

### Error: CORS
Asegúrate que tus microservicios tengan CORS habilitado para `localhost:4200`

### Error: 404 en los servicios
Verifica que las URLs en `environment.ts` sean correctas y que los microservicios estén ejecutándose

### Error: Módulos no encontrados
```bash
ng cache clean
npm install
ng serve
```

## 📚 Documentación Referencias

- [Angular Docs](https://angular.io/docs)
- [RxJS Operators](https://rxjs.dev/operator-decision-tree)
- [RESTful API Design](https://restfulapi.net/)
- [Microservices Patterns](https://microservices.io/patterns/)

## 🎓 Próximos Pasos

1. **Implementa los 4 microservicios** usando la especificación en `MICROSERVICES_API.md`
2. **Conecta la autenticación real** en tu Auth Service
3. **Añade más funcionalidades**:
   - Paginación en listas
   - Filtros avanzados
   - Exportación de datos
   - Gráficos en reportes
4. **Implementa validaciones** en el lado del servidor
5. **Añade logging** centralizado
6. **Configura CI/CD** con GitHub Actions

---

**¡Felicidades! Ahora tienes una aplicación lista para microservicios 🎉**
