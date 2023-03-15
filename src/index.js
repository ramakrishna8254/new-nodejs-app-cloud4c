
class HelloWorld {
  constructor(options) {
      this.options = options || {};
      this._greeting = this.options.greeting || 'Hello World!';
  }

  get greeting() {
    return this._greeting;
  }

  set greeting( message ) {
    this._greeting = message || '';
  }

  greet() {
    console.log(this.greeting);
  }
}

// define factory function(s)

function createHelloWorld(options) {
  return new HelloWorld(options);
}

// export the factory functions

module.exports = {
  createHelloWorld
}

const express = require('express')
const app = express()
const port = 9981

app.get('/', (req, res) => {
  res.send('Helloworld!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
