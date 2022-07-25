const express = require("express");
let products = require('./products')

const PORT = 8080
const NUMBER_ZERO = 0

const app = express();
app.use(express.json());
//exercise 1
app.get("/", (_req, res) => res.send("Hello World!"));

//exercise 2

app.get('/products', (_req, res) => {
    if (!products || products.length === NUMBER_ZERO) {
        return res.status(404).json({ message: 'There is no products' })
    }

    res.status(200).json(products)
})

app.post('/products', (req, res) => {
    const productArray = req.body;

    if (!Array.isArray(productArray) || !productArray) {
        return res.status(404).json({ message: 'Wrong type in body' })
    }

    const slicedProducts = productArray.slice(0, 4);

    products = [...products, ...slicedProducts];

    res.status(200).json(products);
})

app.put('/:id', (req, res) => {
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

app.delete('/:id', (req, res) => {
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

app.listen(PORT, () => console.log("Its working!!!!"))