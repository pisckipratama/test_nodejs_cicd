const express = require('express');
const dotenv = require('dotenv');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

dotenv.config({ path: '.env' });
const app = express();

// extended https://swagger.io/specification/#infoObject

// const swaggerOption = {
//   swaggerDefinition: {
//     info: {
//       version: '1.0.0',
//       title: 'Employees API',
//       description: 'Employees API Information',
//       contact: {
//         name: 'Programmer Minimalist',
//       },
//       servers: ['http://localhost:9000/api/v1'],
//     },
//   },
//   apis: ['server.js'],
// };

const indexRoutes = require('./app/routes/index_router');
app.use('/api/v1/employees', indexRoutes);

// const swaggerDocs = swaggerJsDoc(swaggerOption);
const swaggerDocs = require('./swagger.json');
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

const PORT = process.env.PORT || 1337;

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});

module.exports = app;
