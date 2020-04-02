import express from 'express'
// import Vehicle from './Vehicle'

const port = 8080 // default port to listen

app.get('/', (req, res) => {
  // Expect response to be
  // {
  //   boat: 'sailing',
  //   jet: 'flying',
  //   car: 'driving'
  // }
  res.send({
    boat: '',
    jet: '',
    car: ''
  })
})

// start the Express server
app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${port}`)
})
