const express = require('express');
const { swaggerUi, swaggerDocs } = require('./swagger/swagger');
const app = express();
const weatherRoutes = require('./routes/weatherRoutes')
const PORT = process.env.PORT || 3000;

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use('/', weatherRoutes)

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});