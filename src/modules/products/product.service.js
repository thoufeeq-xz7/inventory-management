// Temporary product storage

let products = [];

let nextId = 1;


// Get all products

exports.getAllProducts = () => {

    return products;

};


// Get single product

exports.getProductById = (id) => {

    return products.find(product => product.id === id);

};


// Create product

exports.createProduct = (data) => {

    const product = {

        id: nextId++,

        name: data.name,

        price: data.price,

        quantity: data.quantity

    };

    products.push(product);

    return product;

};


// Update product

exports.updateProduct = (id, data) => {

    const product = products.find(product => product.id === id);

    if (!product) return null;

    Object.assign(product, data);

    return product;

};


// Delete product

exports.deleteProduct = (id) => {

    const index = products.findIndex(product => product.id === id);

    if (index === -1) return false;

    products.splice(index, 1);

    return true;

};