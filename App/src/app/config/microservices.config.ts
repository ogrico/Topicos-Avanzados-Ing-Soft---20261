/**
 * Configuración de microservicios
 * Define las URLs base de los 4 microservicios serverless
 */
export const MICROSERVICES_CONFIG = {
  userService: {
    name: 'User Service',
    baseUrl: 'https://api.example.com/users', // Reemplazar con URL real
    timeout: 5000,
    retryAttempts: 3
  },
  productService: {
    name: 'Product Service',
    baseUrl: 'https://api.example.com/products', // Reemplazar con URL real
    timeout: 5000,
    retryAttempts: 3
  },
  orderService: {
    name: 'Order Service',
    baseUrl: 'https://api.example.com/orders', // Reemplazar con URL real
    timeout: 5000,
    retryAttempts: 3
  },
  reportService: {
    name: 'Report Service',
    baseUrl: 'https://api.example.com/reports', // Reemplazar con URL real
    timeout: 5000,
    retryAttempts: 3
  }
};

export const APP_CONFIG = {
  appName: 'Microservices Demo App',
  version: '1.0.0',
  environment: 'development',
  logLevel: 'debug'
};
