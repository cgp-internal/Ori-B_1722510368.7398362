const express = require('express');
const app = express();
const { productRouter } = require('./controllers/products');
const { db } = require('./database/dbConfig');

app.use(express.json());
app.use('/products', productRouter);

app.listen(3000, () => {
  console.log('Server started on port 3000');
});