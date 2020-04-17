const express = require('express');
const routes = express.Router();
const ProductController = require('./controllers/ProductController');

routes.get('/products', ProductController.getAll);
routes.get('/product/:id', ProductController.detail);
routes.post('/products', ProductController.store);
routes.put('/product/:id', ProductController.update);
routes.delete('/product/:id', ProductController.destroy);

module.exports = routes;