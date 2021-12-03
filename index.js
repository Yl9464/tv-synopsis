
// const { response } = require('express')
const express = require('express')
const showdata = require('./showdata')
const app = express()

app.use(express.static('public'))

app.set('view engine', 'pug')


app.get('/', (request, response) => {
  response.render('mainpage', { showdata })
})

app.get('/seasons', (request, response) => {
  response.render('season', { title: 'Season 1, Episode 1' })
})
// app.get('/episode/:id', (request, response) => { // returns string
// const episode = showdata.find((episode) => { return episode.number === parseInt(request.params.episode) })

// params acess the value inside variable in '/:episode/'
// return response.render('episodes', { episode })
// })

app.all('*', (request, response) => {
  return response.status(404).send('Sorry Bro...')
})

app.listen(1341)
