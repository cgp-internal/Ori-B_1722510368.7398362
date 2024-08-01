Product Management Application
============================

Introduction
------------

This is a Node.js application for managing products. It provides a RESTful API for performing CRUD (Create, Read, Update, Delete) operations on products.

How to Run
------------

1. Install dependencies: `npm install`
2. Configure database connection in `database/dbConfig.js`
3. Start the server: `node app.js`
4. Access the API through `http://localhost:3000`

API Endpoints
-------------

* `GET /products`: Retrieves a list of all products
* `POST /products`: Creates a new product
* `GET /products/:id`: Retrieves a product by ID
* `PUT /products/:id`: Updates a product
* `DELETE /products/:id`: Deletes a product