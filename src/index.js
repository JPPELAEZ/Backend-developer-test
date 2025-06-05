const app = require('./app.js');
 // Asegúrate de tener este logger creado

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
