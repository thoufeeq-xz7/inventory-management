const express = require('express');

const router = express.Router();

const productController = require('./product.controller');


// GET ALL PRODUCTS

router.get('/', productController.getProducts);


// GET SINGLE PRODUCT

router.get('/:id', productController.getProduct);


// CREATE PRODUCT

router.post('/', productController.createProduct);


// UPDATE PRODUCT

router.put('/:id', productController.updateProduct);


// DELETE PRODUCT

router.delete('/:id', productController.deleteProduct);


module.exports = router;