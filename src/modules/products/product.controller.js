const productService = require('./product.service');


// GET ALL PRODUCTS

exports.getProducts = (req, res) => {

    const products = productService.getAllProducts();

    res.status(200).json({

        success: true,

        data: products

    });

};


// GET SINGLE PRODUCT

exports.getProduct = (req, res) => {

    const id = Number(req.params.id);

    const product = productService.getProductById(id);

    if (!product) {

        return res.status(404).json({

            success: false,

            message: "Product not found"

        });

    }

    res.status(200).json({

        success: true,

        data: product

    });

};


// CREATE PRODUCT

exports.createProduct = (req, res) => {

    const product = productService.createProduct(req.body);

    res.status(201).json({

        success: true,

        message: "Product created successfully",

        data: product

    });

};


// UPDATE PRODUCT

exports.updateProduct = (req, res) => {

    const id = Number(req.params.id);

    const product = productService.updateProduct(id, req.body);

    if (!product) {

        return res.status(404).json({

            success: false,

            message: "Product not found"

        });

    }

    res.status(200).json({

        success: true,

        message: "Product updated successfully",

        data: product

    });

};


// DELETE PRODUCT

exports.deleteProduct = (req, res) => {

    const id = Number(req.params.id);

    const deleted = productService.deleteProduct(id);

    if (!deleted) {

        return res.status(404).json({

            success: false,

            message: "Product not found"

        });

    }

    res.status(200).json({

        success: true,

        message: "Product deleted successfully"

    });

};