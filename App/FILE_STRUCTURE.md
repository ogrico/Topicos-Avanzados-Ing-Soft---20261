# 📁 FILE STRUCTURE - Índice Completo de la Aplicación

## 📊 Estructura General

```
App/
├── 📄 Configuration Files
│   ├── package.json                          # Dependencias NPM
│   ├── tsconfig.json                         # Configuración TypeScript
│   ├── tsconfig.app.json                     # TypeScript para aplicación
│   ├── angular.json                          # Configuración Angular CLI
│   ├── .gitignore                            # Archivos a ignorar en Git
│   └── README.md                             # Documentación principal
│
├── 📚 Documentation
│   ├── SETUP_GUIDE.md                        # Guía de instalación y configuración
│   ├── MICROSERVICES_API.md                  # Especificación de endpoints
│   ├── MICROSERVICES_EXAMPLES.md             # Ejemplos de implementación
│   └── FILE_STRUCTURE.md (este archivo)      # Índice de archivos
│
└── 📂 src/
    ├── 📄 index.html                         # HTML principal
    ├── 📄 main.ts                            # Entry point
    ├── 📄 styles.css                         # Estilos globales
    │
    ├── 📂 app/
    │   ├── 📄 app.module.ts                  # Módulo raíz
    │   ├── 📄 app.component.ts               # Componente raíz
    │   ├── 📄 app.component.html             # Template raíz
    │   ├── 📄 app.component.css              # Estilos raíz
    │   ├── 📄 app-routing.module.ts          # Definición de rutas
    │   │
    │   ├── 📂 config/                         # ⚙️ Configuración centralizada
    │   │   └── 📄 microservices.config.ts    # URLs de microservicios
    │   │
    │   ├── 📂 core/                           # 🔧 Lógica compartida
    │   │   ├── 📂 models/                     # 🏗️ Interfaces y tipos
    │   │   │   ├── 📄 user.model.ts          # Interfaz Usuario
    │   │   │   ├── 📄 product.model.ts       # Interfaz Producto
    │   │   │   ├── 📄 order.model.ts         # Interfaz Pedido
    │   │   │   └── 📄 report.model.ts        # Interfaz Reporte
    │   │   │
    │   │   ├── 📂 services/                   # 🔌 Servicios HTTP
    │   │   │   ├── 📄 http.service.ts        # Wrapper HTTP centralizado
    │   │   │   ├── 📄 auth.service.ts        # Autenticación
    │   │   │   ├── 📄 user.service.ts        # Llamadas a User Service
    │   │   │   ├── 📄 product.service.ts     # Llamadas a Product Service
    │   │   │   ├── 📄 order.service.ts       # Llamadas a Order Service
    │   │   │   └── 📄 report.service.ts      # Llamadas a Report Service
    │   │   │
    │   │   ├── 📂 guards/                     # 🔐 Protección de rutas
    │   │   │   └── 📄 auth.guard.ts          # Guard de autenticación
    │   │   │
    │   │   └── 📂 interceptors/               # 🔀 HTTP Interceptors
    │   │       └── 📄 http.interceptor.ts    # Interceptor de headers
    │   │
    │   ├── 📂 shared/                         # 🧩 Componentes reutilizables
    │   │   ├── 📄 shared.module.ts           # Módulo compartido
    │   │   └── 📂 components/
    │   │       ├── 📂 navbar/
    │   │       │   ├── 📄 navbar.component.ts
    │   │       │   ├── 📄 navbar.component.html
    │   │       │   └── 📄 navbar.component.css
    │   │       ├── 📂 footer/
    │   │       │   ├── 📄 footer.component.ts
    │   │       │   ├── 📄 footer.component.html
    │   │       │   └── 📄 footer.component.css
    │   │       └── 📂 loading-spinner/
    │   │           ├── 📄 loading-spinner.component.ts
    │   │           ├── 📄 loading-spinner.component.html
    │   │           └── 📄 loading-spinner.component.css
    │   │
    │   └── 📂 features/                       # 📦 Módulos de negocio (Lazy-Loaded)
    │       │
    │       ├── 📂 auth/                       # 🔑 Autenticación
    │       │   ├── 📄 auth.module.ts
    │       │   └── 📂 components/
    │       │       └── 📂 login/
    │       │           ├── 📄 login.component.ts
    │       │           ├── 📄 login.component.html
    │       │           └── 📄 login.component.css
    │       │
    │       ├── 📂 dashboard/                  # 📊 Panel principal
    │       │   ├── 📄 dashboard.module.ts
    │       │   └── 📂 components/
    │       │       └── 📂 dashboard/
    │       │           ├── 📄 dashboard.component.ts
    │       │           ├── 📄 dashboard.component.html
    │       │           └── 📄 dashboard.component.css
    │       │
    │       ├── 📂 users/                      # 👥 Gestión de Usuarios (Microservicio 1)
    │       │   ├── 📄 users.module.ts
    │       │   ├── 📄 users-routing.module.ts
    │       │   ├── 📂 services/
    │       │   │   └── 📄 user.service.ts    # Conecta con User Service
    │       │   └── 📂 components/
    │       │       ├── 📂 user-list/
    │       │       │   ├── 📄 user-list.component.ts
    │       │       │   ├── 📄 user-list.component.html
    │       │       │   └── 📄 user-list.component.css
    │       │       ├── 📂 user-detail/
    │       │       │   ├── 📄 user-detail.component.ts
    │       │       │   ├── 📄 user-detail.component.html
    │       │       │   └── 📄 user-detail.component.css
    │       │       └── 📂 user-form/
    │       │           ├── 📄 user-form.component.ts
    │       │           ├── 📄 user-form.component.html
    │       │           └── 📄 user-form.component.css
    │       │
    │       ├── 📂 products/                   # 📦 Catálogo de Productos (Microservicio 2)
    │       │   ├── 📄 products.module.ts
    │       │   ├── 📂 services/
    │       │   │   └── 📄 product.service.ts # Conecta con Product Service
    │       │   └── 📂 components/
    │       │       └── 📂 product-list/
    │       │           ├── 📄 product-list.component.ts
    │       │           ├── 📄 product-list.component.html
    │       │           └── 📄 product-list.component.css
    │       │
    │       ├── 📂 orders/                     # 🛒 Gestión de Pedidos (Microservicio 3)
    │       │   ├── 📄 orders.module.ts
    │       │   ├── 📂 services/
    │       │   │   └── 📄 order.service.ts   # Conecta con Order Service
    │       │   └── 📂 components/
    │       │       └── 📂 order-list/
    │       │           ├── 📄 order-list.component.ts
    │       │           ├── 📄 order-list.component.html
    │       │           └── 📄 order-list.component.css
    │       │
    │       └── 📂 reports/                    # 📊 Reportes (Microservicio 4)
    │           ├── 📄 reports.module.ts
    │           ├── 📂 services/
    │           │   └── 📄 report.service.ts  # Conecta con Report Service
    │           └── 📂 components/
    │               └── 📂 report-list/
    │                   ├── 📄 report-list.component.ts
    │                   ├── 📄 report-list.component.html
    │                   └── 📄 report-list.component.css
    │
    └── 📂 environments/                       # 🌍 Configuración por entorno
        ├── 📄 environment.ts                 # Desarrollo
        └── 📄 environment.prod.ts            # Producción
```

---

## 📝 Descripción Detallada de Carpetas

### `/config`
Centraliza la configuración de todos los microservicios en un solo lugar.
- Fácil de mantener y actualizar
- Cambios globales en un archivo

### `/core`
Lógica compartida y componentes críticos:
- **models**: Interfaces TypeScript para tipado
- **services**: Servicios reutilizables (HTTP, Auth, etc.)
- **guards**: Protección de rutas
- **interceptors**: Manipulación centralizada de requests/responses

### `/shared`
Componentes UI reutilizables:
- Navbar (navegación principal)
- Footer (pie de página)
- LoadingSpinner (indicador de carga)

### `/features`
Módulos de negocio organizados por contexto:
- Cada módulo es independiente y lazy-loaded
- Contiene su propia lógica de negocio
- Reutiliza servicios del `/core`

---

## 🔄 Flujo de Datos

```
Usuario interactúa
         ↓
   Componente Feature
         ↓
   Service (Feature)
         ↓
   HttpService (Core)
         ↓
   HttpAuthInterceptor (Core)
    (Añade headers)
         ↓
   Microservicio Serverless
         ↓
   Respuesta HTTP
         ↓
   Componente actualiza
         ↓
   Template renderiza
```

---

## 🚀 Cómo Navegar el Proyecto

### Para agregar una nueva funcionalidad:
1. Crea un nuevo feature en `/features`
2. Define modelos en `/core/models` si es necesario
3. Crea un servicio en tu feature que llame a HttpService
4. Implementa componentes en el feature
5. Declara rutas en el routing del feature

### Para modificar la conexión a microservicios:
1. Edita `src/environments/environment.ts`
2. La mayoría de cambios automáticamente se reflejan en todos los servicios

### Para agregar componentes compartidos:
1. Crea en `/shared/components`
2. Decláralos en `shared.module.ts`
3. Úsalos en cualquier módulo

---

## 📌 Convenciones de Nomenclatura

| Elemento | Convención | Ejemplo |
|----------|-----------|---------|
| **Archivos** | kebab-case | `user-list.component.ts` |
| **Clases** | PascalCase | `UserListComponent` |
| **Interfaces** | PascalCase | `User`, `Product` |
| **Variables** | camelCase | `currentUser`, `isLoading` |
| **Constantes** | UPPER_CASE | `API_URL`, `MAX_RETRIES` |
| **Rutas** | kebab-case | `/user-list`, `/order-detail` |

---

## 🔗 Enlaces Rápidos

- **Documentación**: [README.md](README.md)
- **Guía de Setup**: [SETUP_GUIDE.md](SETUP_GUIDE.md)
- **API de Microservicios**: [MICROSERVICES_API.md](MICROSERVICES_API.md)
- **Ejemplos de Implementación**: [MICROSERVICES_EXAMPLES.md](MICROSERVICES_EXAMPLES.md)

---

## 💡 Tips Útiles

1. **Lazy Loading**: Todos los feature modules son lazy-loaded para mejor performance
2. **Tipado Fuerte**: Usa las interfaces en `/core/models` para evitar errores
3. **Reutilización**: No repitas código, usa servicios del `/core`
4. **Modularidad**: Cada módulo feature debe ser independiente
5. **Documentación**: Mantén los archivos documentados con comentarios

---

**¡Espero que esta estructura te ayude a navegar el proyecto! 🎉**
