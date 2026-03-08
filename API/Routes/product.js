import { Router } from "express"
import ProdutcsController from "../Controller/Products/products.js"

const productRoutes = Router()

productRoutes.post('/create', async (req, res) => {
    await ProdutcsController.createProducts(req, res)
})

productRoutes.put('/update/:product_id', async (req, res) => {
})

productRoutes.get('/getAll', async (req, res) => {
    await ProdutcsController.getAllProducts(req, res)
})


productRoutes.get('/get/:product_id', (req, res) => {

})

productRoutes.delete('/delete/:product_id', (req, res) => {

})

export default productRoutes