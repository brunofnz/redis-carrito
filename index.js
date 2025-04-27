const express = require('express');
const Redis = require('ioredis');

const app = express();
const redis = new Redis(); // Conexión por default: localhost:6379

app.use(express.json());
app.use(express.static('public'));

// Agregar producto al carrito
app.post('/api/carrito/:userId', async (req, res) => {
  const { userId } = req.params;
  const { productoId, cantidad } = req.body;

  await redis.hincrby(`carrito:${userId}`, `producto:${productoId}`, cantidad);
  await redis.expire(`carrito:${userId}`, 1800); // 30 minutos de expiración
  res.json({ message: 'Producto agregado al carrito' });
});

// Ver el carrito
app.get('/api/carrito/:userId', async (req, res) => {
  const { userId } = req.params;
  const carrito = await redis.hgetall(`carrito:${userId}`);
  res.json(carrito);
});

// Vaciar carrito
app.delete('/api/carrito/:userId', async (req, res) => {
  const { userId } = req.params;
  await redis.del(`carrito:${userId}`);
  res.json({ message: 'Carrito eliminado' });
});

app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});
