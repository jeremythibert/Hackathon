const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs')
const cors = require('cors')

const app = express()

const port = 4001
const path = '/home/cyril/HackHalloween/back/json/killers.json'

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// }); 

app.use(cors())

app.get('/', (req, res) => {

  res.status(200).send(' Stay a while and listen...')
})

app.get('/killers', (req, res, err) => {

  fs.readFile(path ,(error, data) => {
    if(error) {
      throw error
    }
    let killers = JSON.parse(data)
    res.status(200).send(killers)
  })
})

app.get('/task/:task', (req, res, err) => {
  const task = req.params.task
  fs.readFile(path ,(error, data) => {
    if(error) {
      throw error
    }
    let killers = JSON.parse(data)
    const killersFiltered = []
    killers.killer.map(killer => {
      killer.task.map(killerTask => {
        if(killerTask.task === task) {
          killersFiltered.push(killer)
        }
      })
    })
    res.status(200).send(killersFiltered)
    
  })
})

app.listen(port, (err) => {
  if(err) {
    throw new Error('Something went south ...', err)
  }
  console.log(`Server is listening on ${port}`);
  
})