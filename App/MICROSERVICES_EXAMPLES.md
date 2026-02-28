# Ejemplos de Implementación - Microservicios Serverless

Ejemplos reales de cómo implementar los 4 microservicios que se conectarán con la aplicación Angular.

## 1️⃣ USER SERVICE - Node.js + Express

```javascript
// server.js
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

let users = [];

// Obtener todos
app.get('/users', (req, res) => {
  res.json(users);
});

// Crear usuario
app.post('/users', (req, res) => {
  const newUser = {
    id: Date.now().toString(),
    ...req.body,
    createdAt: new Date()
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

app.listen(3001, () => console.log('User Service en 3001'));
```

## 2️⃣ PRODUCT SERVICE - Python + Flask

```python
# app.py
from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

products = []

@app.route('/products', methods=['GET'])
def get_products():
    return jsonify(products)

@app.route('/products', methods=['POST'])
def create_product():
    # Crear producto
    return jsonify({"success": True}), 201

if __name__ == '__main__':
    app.run(port=3002)
```

## 3️⃣ ORDER SERVICE - Node.js + TypeScript

```typescript
// server.ts
import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

let orders = [];

app.get('/orders', (req, res) => {
  res.json(orders);
});

app.post('/orders', (req, res) => {
  const newOrder = {
    id: `ORD-${Date.now()}`,
    ...req.body
  };
  orders.push(newOrder);
  res.status(201).json(newOrder);
});

app.listen(3003, () => console.log('Order Service en 3003'));
```

## 4️⃣ REPORT SERVICE - AWS Lambda

```typescript
// handler.ts
export const getAllReports = async (event: any) => {
  return {
    statusCode: 200,
    body: JSON.stringify([])
  };
};
```

---

**Para más detalles sobre estructura y configuración, consulta SETUP_GUIDE.md y MICROSERVICES_API.md**
