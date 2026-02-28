# Especificación de Endpoints - Microservicios

Esta documentación define los endpoints esperados que deben implementar tus microservicios serverless.

## 1️⃣ USER SERVICE (Puerto: 3001)

### Base URL: `http://localhost:3001`

#### GET `/users`
Obtiene todos los usuarios.
**Response:**
```json
[
  {
    "id": "1",
    "name": "Juan Pérez",
    "email": "juan@example.com",
    "phone": "+1234567890",
    "role": "admin",
    "createdAt": "2024-01-15T10:30:00Z"
  }
]
```

#### GET `/users/:id`
Obtiene un usuario por ID.

#### POST `/users`
Crea un nuevo usuario.

#### PUT `/users/:id`
Actualiza un usuario.

#### DELETE `/users/:id`
Elimina un usuario.

#### GET `/users/search?q=nombre`
Busca usuarios por nombre.

---

## 2️⃣ PRODUCT SERVICE (Puerto: 3002)

### Base URL: `http://localhost:3002`

#### GET `/products`
Obtiene todos los productos.

#### GET `/products/:id`
Obtiene un producto por ID.

#### POST `/products`
Crea un nuevo producto.

#### PUT `/products/:id`
Actualiza un producto.

#### DELETE `/products/:id`
Elimina un producto.

#### GET `/products/category/:category`
Obtiene productos por categoría.

#### GET `/products/search?q=termino`
Busca productos.

---

## 3️⃣ ORDER SERVICE (Puerto: 3003)

### Base URL: `http://localhost:3003`

#### GET `/orders`
Obtiene todos los pedidos.

#### GET `/orders/:id`
Obtiene un pedido por ID.

#### POST `/orders`
Crea un nuevo pedido.

#### PUT `/orders/:id`
Actualiza un pedido.

#### GET `/orders/user/:userId`
Obtiene pedidos de un usuario.

#### GET `/orders/status/:status`
Obtiene pedidos por estado.

---

## 4️⃣ REPORT SERVICE (Puerto: 3004)

### Base URL: `http://localhost:3004`

#### GET `/reports`
Obtiene todos los reportes.

#### GET `/reports/:id`
Obtiene un reporte por ID.

#### POST `/reports/generate`
Genera un nuevo reporte.

#### GET `/reports/type/:type`
Obtiene reportes por tipo.

---

**Para más detalles, consulta MICROSERVICES_EXAMPLES.md**
