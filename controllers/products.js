const express = require('express');
const router = express.Router();
const { createProduct, readProduct, updateProduct, deleteProduct } = require('../services/productService');

router.post('/products', async (req, res) => {
  try {
    const product = req.body;
    await createProduct(product);
    res.status(201).send(`Product created with id ${product.id}`);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error creating product');
  }
});

router.get('/products/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const product = await readProduct(id);
    res.status(200).send(product);
  } catch (err) {
    console.error(err);
    res.status(404).send('Product not found');
  }
});

router.put('/products/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const product = req.body;
    await updateProduct(id, product);
    res.status(200).send(`Product updated with id ${id}`);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error updating product');
  }
});

router.delete('/products/:id', async (req, res) => {
  try {
    const id = req.params.id;
    await deleteProduct(id);
    res.status(200).send(`Product deleted with id ${id}`);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error deleting product');
  }
});

module.exports = router;