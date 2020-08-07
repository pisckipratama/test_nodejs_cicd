const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const swaggerUi = require('swagger-ui-express');

dotenv.config({ path: '.env' });
const app = express();

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const indexRoutes = require('./app/routes/index_router');
app.use('/api/v1/employees', indexRoutes);

// swagger option
const swaggerDocs = require('./swagger.json');
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

const PORT = process.env.PORT || 1337;

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});

module.exports = app;
