const express = require('express')
const showdata = require('./showdata')
const app = express()

app.use(express.static('public'))

app.set('view engine', 'pug')

app.get('/', (request, response) => {
  response.render('mainpage', { showdata })
})

app.get('/season/:num', (request, response) => {
  const season = showdata.seasons.find((season) => season.number === parseInt(request.params.num))

  return response.render('season', { season })
})


app.all('*', (request, response) => {
  return response.status(404).send('Sorry Bro...')
})

app.listen(1341)
