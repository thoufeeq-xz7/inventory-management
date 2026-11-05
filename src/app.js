const express = require('express');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Home route
app.get('/', (req, res) => {
    res.json({
        success: true,
        message: 'Inventory Management API is running'
    });
});

module.exports = app;




// Middleware

app.use(cors());

app.use(express.json());


// Import Routes

const productRoutes = require('./modules/products/product.routes');


// API Versioning

app.use('/api/v1/products', productRoutes);


// Home Route

app.get('/', (req, res) => {

    res.json({

        success: true,

        message: "Inventory Management API is running"

    });

});


module.exports = app;