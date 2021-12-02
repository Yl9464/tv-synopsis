const express = require('express')

const app = express()

app.get('/', (request, response) => {
  return response.send('Hello')
})

app.all('*', (request, response) => {
  return response.status(404).send('Sorry Bro...')
})

app.listen(1341)
