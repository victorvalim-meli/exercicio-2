const express = require("express");
let products = require('./products')

const productRoutes = express.Router();

productRoutes.get('/', (_req, res) => {
    if (!products || products.length === NUMBER_ZERO) {
        return res.status(404).json({ message: 'There is no products' })
    }

    return res.status(200).json(products)
})

productRoutes.get('/:id', (req, res) => {
    const product = req.body;
    const { id } = req.params;

    if (!product) {
        return res.status(404).json({ message: 'Wrong type in body' })
    }

    const productById = products.find((element) => element.id === +id)

    if (!productById) {
        return res.status(404).json({ message: 'Cannot find this product id' })
    }

    res.status(200).json(productById);
})

productRoutes.post('/', (req, res) => {
    const productObject = req.body;

    if (typeof productObject !== 'object' && productObject === null) {
        return res.status(404).json({ message: 'Wrong type in body' })
    }

    products = [...products, productObject];

    res.status(200).json(products);
})

productRoutes.put('/:id', (req, res) => {
    const product = req.body;
    const { id } = req.params;

    if (!product) {
        return res.status(404).json({ message: 'Wrong type in body' })
    }

    const isIdValid = products.some((element) => element.id === +id)

    if (!isIdValid) {
        return res.status(404).json({ message: 'Cannot find this product id' })
    }

    let newProductList = products.map((element) => element.id === +id ? product : element);


    res.status(200).json(newProductList);
})

productRoutes.delete('/:id', (req, res) => {
    const { id } = req.params;

    if (!id || isNaN(+id)) {
        return res.status(404).json({ message: 'Wrong id typing' })
    }

    const isIdValid = products.some((element) => element.id === +id)

    if (!isIdValid) {
        return res.status(404).json({ message: 'Cannot find this product id' })
    }

    let newProductList = products.filter((element) => element.id !== +id);

    res.status(200).json(newProductList);
})

module.exports = productRoutes