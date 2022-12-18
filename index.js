const express = require('express')
const app = express()
const products = [
    { id: 1, name: 'Bread', amount: 4, price: 0.7 },
    { id: 2, name: 'Coca-Cola', amount: 1, price: 1.6 },
    { id: 3, name: 'Chips', amount: 7, price: 2.5 },
    { id: 4, name: 'Peanut', amount: 2, price: 5.2 },
    { id: 5, name: 'Coffee', amount: 12, price: 1.3 },
    { id: 6, name: 'Gum', amount: 10, price: 5.7 },
    { id: 7, name: 'Gweets', amount: 100, price: 7.5 },
    { id: 8, name: 'Cigarettes', amount: 9, price: 4 },
    { id: 9, name: 'Butter', amount: 20, price: 9 },
    { id: 10, name: 'Drinks', amount: 6, price: 3 }
]

app.get('/products/', function (req, res) {
    res.send(products)
})

app.get('/products/:id', function (req, res) {
    const product = products.find((el) => el.id == req.params.id)
    if (product) {
        res.status(200).json(product)

    }
    else {
        res.status(404).send()

    }
})


app.listen(3000, () => {
    console.log('Project is launched')
})