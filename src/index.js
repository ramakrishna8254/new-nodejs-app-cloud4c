const express = require('express')
const app = express()
const port = 9981

app.get('/', (req, res) => {
  res.send('Helloworld!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
