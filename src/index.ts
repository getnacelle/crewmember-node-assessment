import express from 'express'
import ProductList from './ProductList'
import db from './data/db'

const app = express()
const port = 8080 // default port to listen

app.get('/', (req, res) => {
  const { products } = db
  const redNames = new ProductList(products)
  const abcId = new ProductList(products)
  const under100 = new ProductList(products)

  // Can't change anything below this line
  // -------------------------------------------------
  res.send({
    // Expect: "Red Uniform Red Phaser Red Dilithium Crystals"
    redNames: redNames.stringify(),

    // Expect: "abc-1 abc-2 abc-3"
    abcId: abcId.stringify(),

    // Expect: "Dilithium Crystals"
    under100: under100.stringify()
  })
})

// start the Express server
app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${port}`)
})
