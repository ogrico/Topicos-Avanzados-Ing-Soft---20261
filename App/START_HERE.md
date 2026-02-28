# 🚀 COMIENZA AQUÍ - Quick Start Guide

Bienvenido a tu nueva aplicación Angular para **Arquitectura de Microservicios**.

---

## ⚡ 3 Pasos para Empezar

### Paso 1: Instala Dependencias
```bash
cd App
npm install
```
*Espera entre 2-5 minutos mientras se instalan las dependencias*

### Paso 2: Inicia la Aplicación
```bash
npm start
```
*O si prefieres: `ng serve`*

Deberías ver:
```
✔ Compiled successfully.
⠋ Building...

Application bundle generation complete.

Initial chunk files | Names         |  Raw size
main.js             | main          | 234.56 kB |

The application will be available at `http://localhost:4200/`

✔ Compiling successfully
```

### Paso 3: Abre en tu Navegador
- 🌐 URL: `http://localhost:4200`
- 📧 Email: `usuario@example.com`
- 🔑 Contraseña: `123456`

---

## 📖 ¿Qué Leer Primero?

### 1️⃣ Si es tu PRIMER DÍA
Lee en este orden:
1. **Este archivo** (lo estás leyendo ✓)
2. [README.md](README.md) - Visión general
3. [EXECUTIVE_SUMMARY.md](EXECUTIVE_SUMMARY.md) - Resumen ejecutivo

### 2️⃣ Si quieres ENTENDER LA ESTRUCTURA
Lee:
1. [FILE_STRUCTURE.md](FILE_STRUCTURE.md) - Índice completo de archivos
2. [SETUP_GUIDE.md](SETUP_GUIDE.md) - Configuración avanzada

### 3️⃣ Si vas a IMPLEMENTAR MICROSERVICIOS
Lee:
1. [MICROSERVICES_API.md](MICROSERVICES_API.md) - Especificación de endpoints
2. [MICROSERVICES_EXAMPLES.md](MICROSERVICES_EXAMPLES.md) - Ejemplos en 4 lenguajes

### 4️⃣ Si necesitas TROUBLESHOOTING
Ve a [SETUP_GUIDE.md](SETUP_GUIDE.md#-troubleshooting)

---

## 🎯 Objetivo de la App

Esta aplicación Angular está diseñada para **practicar arquitectura de microservicios** conectándose a:

1. **User Service** (Puerto 3001)
   - Gestión de usuarios
   - CRUD completo

2. **Product Service** (Puerto 3002)
   - Catálogo de productos
   - Búsqueda y filtros

3. **Order Service** (Puerto 3003)
   - Gestión de pedidos
   - Seguimiento de estado

4. **Report Service** (Puerto 3004)
   - Generación de reportes
   - Análisis de datos

---

## 📁 Carpetas Importantes

```
App/
├── src/app/
│   ├── core/          ← Servicios compartidos
│   ├── features/      ← Los 4 módulos de negocio
│   └── shared/        ← Componentes reutilizables
├── src/environments/  ← Configuración (EDITA AQUÍ para URLs)
└── Documentación      ← Archivos .md que explicamos arriba
```

---

## 🔧 Configuración Inicial

### Antes de Conectar Microservicios Reales

Edita: `src/environments/environment.ts`

Busca esta sección y actualiza con tus URLs:
```typescript
microservices: {
  userServiceUrl: 'http://localhost:3001',      // ← Cambiar aquí
  productServiceUrl: 'http://localhost:3002',   // ← Cambiar aquí
  orderServiceUrl: 'http://localhost:3003',     // ← Cambiar aquí
  reportServiceUrl: 'http://localhost:3004'     // ← Cambiar aquí
}
```

---

## 🧭 Navegación de la App

Una vez iniciada, verás:

**Navbar (Arriba)**
- Logo de la aplicación
- Enlaces a: Usuarios, Productos, Pedidos, Reportes
- Mi perfil y Cerrar sesión

**Página Principal (Dashboard)**
- 4 tarjetas con los módulos principales
- Descripción de qué son los microservicios
- Instrucciones de configuración

**Módulos**
- Usuarios: Listar, crear, editar, eliminar usuarios
- Productos: Catalogo de productos
- Pedidos: Historial de órdenes
- Reportes: Análisis y reportes

---

## 💡 Primeras Cosas que Probar

1. ✅ Inicia sesión
2. ✅ Navega al Dashboard
3. ✅ Haz clic en "Usuarios" - verás un mensaje de error
   - Esto es NORMAL porque aún no tienes microservicios
4. ✅ Prueba la búsqueda en Usuarios
5. ✅ Intenta crear un nuevo usuario (verá error sin microservicio)

*Los errores que ves son esperados hasta que conectes microservicios reales*

---

## 🚨 Si Algo Sale Mal

### Error: "Cannot find module"
```bash
rm -rf node_modules package-lock.json
npm install
```

### Error: Puerto 4200 ya en uso
```bash
ng serve --port 4300  # Usa otro puerto
```

### Error: CORS en los servicios
- Asegúrate que tus microservicios envíen headers CORS
- Ver [SETUP_GUIDE.md](SETUP_GUIDE.md#habilitar-cors-en-tus-microservicios)

### Otros problemas
- Ver Troubleshooting en [SETUP_GUIDE.md](SETUP_GUIDE.md#-troubleshooting)

---

## 📚 Documentos Rápidos

| Archivo | Propósito | Léelo si... |
|---------|-----------|-----------|
| [README.md](README.md) | Intro completa | Necesitas visión general |
| [SETUP_GUIDE.md](SETUP_GUIDE.md) | Configuración detallada | Quieres configuración avanzada |
| [MICROSERVICES_API.md](MICROSERVICES_API.md) | Especificación API | Vas a implementar servicios |
| [MICROSERVICES_EXAMPLES.md](MICROSERVICES_EXAMPLES.md) | Ejemplos reales | Necesitas código para empezar |
| [FILE_STRUCTURE.md](FILE_STRUCTURE.md) | Mapa de archivos | Quieres entender la estructura |
| [EXECUTIVE_SUMMARY.md](EXECUTIVE_SUMMARY.md) | Resumen ejecutivo | Necesitas presentar a otros |

---

## 🛠️ Comandos Útiles

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm start
# O: ng serve

# Compilar para producción
npm run build
# O: ng build --configuration production

# Ejecutar tests
npm test

# Verificar sintaxis
npm run lint

# Limpiar caché
ng cache clean
```

---

## 📊 Resumen Rápido

**Lo que tienes:**
- ✅ Aplicación Angular completa
- ✅ 6 módulos (auth, dashboard, users, products, orders, reports)
- ✅ Autenticación integrada
- ✅ Diseño responsive
- ✅ Documentación completa
- ✅ Ejemplos de microservicios

**Lo que necesitas hacer:**
1. Implementar los 4 microservicios
2. Actualizar URLs en `environment.ts`
3. ¡Listo! La app se conectará automáticamente

---

## 🎓 Siguientes Pasos

### Hoy (Primeras 30 minutos)
- [ ] Instalar y ejecutar la app
- [ ] Probar login y navegación
- [ ] Leer este Quick Start Guide

### Esta Semana
- [ ] Leer documentación completa
- [ ] Implementar primer microservicio
- [ ] Conectar a la app

### Este Mes
- [ ] Implementar los 4 microservicios
- [ ] Probar integración completa
- [ ] Desplegar a servidor

---

## 🌟 Características Favoritas

1. **Lazy Loading** - Solo carga módulos cuando se necesitan
2. **HTTP Interceptor** - Automáticamente añade headers
3. **Tipado Fuerte** - TypeScript en todos lados
4. **Componentes Reutilizables** - Navbar, Footer, Spinner
5. **Documentación** - 5 archivos MD con ejemplos completos
6. **Diseño Responsivo** - Funciona en móvil, tablet, desktop

---

## ❓ Preguntas Frecuentes

**P: ¿Tengo que implementar los 4 microservicios?**
R: No necesariamente para probar. Pero sin ellos verás errores HTTP 404. Para producción sí los necesitas.

**P: ¿Qué hago cuando obtengo errores de CORS?**
R: Tus microservicios deben habilitar CORS. Ve a [SETUP_GUIDE.md](SETUP_GUIDE.md#habilitar-cors-en-tus-microservicios)

**P: ¿Puedo cambiar los colores/diseño?**
R: Claro. Los estilos CSS están en cada componente. Los colores primarios están en `styles.css`

**P: ¿Cómo conecto autenticación real?**
R: Edita `src/app/core/services/auth.service.ts` para llamar a tu Auth Service real.

---

## 🎉 ¡Listo!

Ya tienes todo lo que necesitas. 

### Próxima línea de comando:
```bash
npm start
```

Luego abre `http://localhost:4200` y ¡que comience la diversión! 🚀

---

**¿Preguntas?**
- Revisa la documentación .md en la carpeta raíz
- Cada archivo tiene ejemplos reales

**¿Necesitas ayuda?**
- Troubleshooting: [SETUP_GUIDE.md](SETUP_GUIDE.md#-troubleshooting)
- Ejemplos: [MICROSERVICES_EXAMPLES.md](MICROSERVICES_EXAMPLES.md)

---

*Creado el: 28 de Febrero, 2026*  
*Para: Práctica de Arquitectura de Microservicios*  
*Stack: Angular 17 + TypeScript + RxJS*

**¡Que disfrutes aprendiendo sobre microservicios! 🎓**
