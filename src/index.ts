import express from 'express'
// import Vehicle from './Vehicle'

const app = express()
const port = 8080 // default port to listen

app.get('/', (req, res) => {
  // Expect response to be
  // {
  //   boat: 'sailing',
  //   jet: 'flying',
  //   car: 'driving'
  // }
  res.send({})
})

// start the Express server
app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${port}`)
})
