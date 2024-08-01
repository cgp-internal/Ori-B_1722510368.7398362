const { db } = require('./database/dbConfig');

const createProduct = async (product) => {
  const query = "INSERT INTO products SET ?";
  db.query(query, product, (err, results) => {
    if (err) {
      console.error("error creating product:", err);
    } else {
      console.log("product created with id:", results.insertId);
    }
  });
};

const readProduct = async (id) => {
  const query = "SELECT * FROM products WHERE id = ?";
  return new Promise((resolve, reject) => {
    db.query(query, id, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

const updateProduct = async (id, product) => {
  const query = "UPDATE products SET ? WHERE id = ?";
  db.query(query, [product, id], (err, results) => {
    if (err) {
      console.error("error updating product:", err);
    } else {
      console.log("product updated with id:", id);
    }
  });
};

const deleteProduct = async (id) => {
  const query = "DELETE FROM products WHERE id = ?";
  db.query(query, id, (err, results) => {
    if (err) {
      console.error("error deleting product:", err);
    } else {
      console.log("product deleted with id:", id);
    }
  });
};

module.exports = { createProduct, readProduct, updateProduct, deleteProduct };