const express = require('express')
const app = express()
const port = 9981

app.get('/', (req, res) => {
  res.send('Welcome to Cloud4C Technologies Hyderabad......A CTRLS Datacenter Company!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
