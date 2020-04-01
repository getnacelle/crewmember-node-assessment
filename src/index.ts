import express from 'express'
import ProductList from './ProductList'
import products from './data/products'

const app = express()
const port = 8080 // default port to listen

app.get('/', (req, res) => {
  const over100 = new ProductList(products)
  const under100 = new ProductList(products)
  const startsWithP = new ProductList(products)

  // Can't change anything below this line
  // -------------------------------------------------
  res.send({
    over100: over100.filter(),
    under100: under100.filter(),
    startsWithP: startsWithP.filter()
  })
})

// start the Express server
app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${port}`)
})
