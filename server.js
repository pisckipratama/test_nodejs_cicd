const express = require('express');
const dotenv = require('dotenv');

dotenv.config({ path: '.env' });
const app = express();

const indexRoutes = require('./app/routes/index_router');
app.use('/api/v1/data', indexRoutes);

const PORT = process.env.PORT || 1337;

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});

module.exports = app;
