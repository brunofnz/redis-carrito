# 🚀 **Carrito de Compras con Redis**

Este proyecto es una aplicación de carrito de compras que utiliza **Redis** como almacenamiento para gestionar el carrito de un usuario. Cada vez que un usuario agrega un producto al carrito o vacía su carrito, la información se guarda de manera eficiente en Redis.

El sistema simula un carrito de compras con productos que se pueden agregar y eliminar en una interfaz web. Los datos del carrito se mantienen persistentes en Redis, lo que permite que el usuario pueda actualizar su carrito, incluso en sesiones futuras.

---

## 📚 **Tecnologías Usadas**

- **Node.js**: Plataforma de JavaScript en el lado del servidor.
- **Express**: Framework web minimalista para Node.js que facilita la creación de APIs RESTful.
- **ioredis**: Cliente de Redis para Node.js, utilizado para interactuar con Redis.
- **Redis**: Base de datos en memoria para almacenar los productos en el carrito de manera eficiente.
- **HTML/CSS**: Para la estructura y diseño básico de la interfaz de usuario.

---

## 🛠️ **Instalación**

Sigue estos pasos para poner en marcha el proyecto en tu máquina local:

### 1. Clona el repositorio:

```bash
git clone https://github.com/tu-usuario/carrito-redis.git
cd carrito-redis
```

### 2. Instala las dependencias:

```bash
npm install
```

### 3. Configura Redis

Asegúrate de tener Redis instalado en tu máquina o usa una instancia de Redis en la nube. Si tienes Redis en local, puedes iniciar el servidor de Redis con el siguiente comando:

```bash
docker run -p 6379:6379 --name redis-test -d redis
```

Si estás usando Redis en la nube, asegúrate de tener configurado el acceso (puerto, contraseña, etc.) en el archivo de configuración.

### 4. Ejecuta el servidor

Con todas las dependencias instaladas y Redis en funcionamiento, puedes iniciar el servidor con:

```bash
npm start
```

El servidor estará disponible en \`http://localhost:3000\`.

---

## ⚙️ **Cómo Funciona**

1. **Página Web**: Al acceder a la página, el usuario puede ingresar un **ID de producto** y una **cantidad** para agregar productos al carrito.
2. **Agregar productos**: Al presionar el botón "Agregar al Carrito", los productos se almacenan en Redis bajo el carrito del usuario.
3. **Actualizar carrito**: Los usuarios pueden hacer clic en "Actualizar Carrito" para ver el contenido actual de su carrito de compras.
4. **Vaciar carrito**: Si el usuario desea eliminar todos los productos del carrito, puede hacer clic en el botón "Vaciar Carrito", lo que elimina todos los productos guardados en Redis.
5. **Persistencia**: Los datos del carrito se almacenan en Redis, lo que permite que los productos permanezcan guardados incluso entre sesiones.

---

## 🌟 **Características**

- **Gestión de carrito persistente**: Los productos agregados al carrito se mantienen guardados en Redis, garantizando que no se pierdan al cerrar el navegador o reiniciar el servidor.
- **Interfaz simple**: Una interfaz sencilla y clara para agregar productos, ver el carrito y vaciarlo.
- **Flexible**: Puedes probar con diferentes productos e interacciones para ver cómo se actualiza el carrito.

---

## 📊 **Estructura del Proyecto**

```
carrito-redis/
├── public/
│   ├── index.html         # Página principal del carrito de compras
│   └── style.css          # Estilos CSS básicos
├── src/
│   ├── index.js           # Archivo principal que maneja la API del carrito y la interacción con Redis
├── package.json           # Dependencias y scripts de la aplicación
└── README.md              # Documentación del proyecto
```

---

## 🔧 **Puntos de Mejora**

- **Autenticación de usuarios**: Implementar un sistema de autenticación para que cada usuario tenga su propio carrito persistente.
- **Interfaz más avanzada**: Mejorar el diseño visual con más interactividad y dinamismo usando **JavaScript** o **Vue.js/React**.
- **Manejo de inventarios**: Integrar un sistema para verificar si hay suficiente stock antes de agregar productos al carrito.

---

## 🚀 **Contribuciones**

Si tienes ideas para mejorar este proyecto o quieres contribuir, ¡siéntete libre de hacer un **fork** del repositorio y enviar un **pull request**!

---

## 📜 **Licencia**

Este proyecto está bajo la licencia **MIT**. Consulta el archivo \`LICENSE\` para más detalles."
