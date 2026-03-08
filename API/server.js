import express from 'express'
import cors from 'cors'
import productRoutes  from './Routes/product.js'

export const app = express()
const port = 3001
app.use(express.json())
app.use(cors())


app.use('/product', productRoutes)

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})