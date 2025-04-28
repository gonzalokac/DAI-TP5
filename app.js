import express from 'express';
import { obtenerHoraActual, obtenerFechaCompleta } from './time.js';

const app = express();

app.get('/', (req, res) => {
  res.send('¡Bienvenido al servidor de la hora!');
});

app.get('/hora', (req, res) => {
  res.send(obtenerHoraActual());
});

app.get('/fecha-completa', (req, res) => {
  res.send(obtenerFechaCompleta());
});

export default app;