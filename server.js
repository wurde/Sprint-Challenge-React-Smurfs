'use strict'

/**
 * Dependencies
 */

const express = require('express')
const body_parser = require('body-parser')
const cors = require('cors')

/**
 * Constants
 */

const port = 3333

/**
 * Define seed data
 */

let smurf_id = 1
let smurfs = [
  {
    id: 0,
    name: 'Brainey Smurf',
    age: 200,
    height: '8cm'
  }
]

/**
 * Define app
 */

const app = express()

/**
 * Define error handler
 */

const send_user_error = (msg, res) => {
  res.status(422)
  res.json({ Error: msg })
  return
}

/**
 * Middleware
 */

app.use(body_parser.json())
app.use(cors())

/**
 * Routes
 */

app.get('/smurfs', (req, res) => {
  res.json(smurfs)
})

app.post('/smurfs', (req, res) => {
  console.log("req.body", req.body)
  const { name, age, height } = req.body
  const newSmurf = { name, age, height, id: smurf_id }
  if (!name || !age || !height) {
    return send_user_error(
      'Ya gone did smurfed! Name/Age/Height are all required to create a smurf in the smurf DB.',
      res
    )
  }
  const findSmurfByName = smurf => {
    return smurf.name === name
  }
  if (smurfs.find(findSmurfByName)) {
    return send_user_error(
      `Ya gone did smurfed! ${name} already exists in the smurf DB.`,
      res
    )
  }

  smurfs.push(newSmurf)
  smurf_id++
  res.json(smurfs)
})

app.put('/smurfs/:id', (req, res) => {
  const { id } = req.params
  const { name, age, height } = req.body
  const findSmurfById = smurf => {
    return smurf.id == id
  }
  const foundSmurf = smurfs.find(findSmurfById)
  if (!foundSmurf) {
    return send_user_error('No Smurf found by that ID', res)
  } else {
    if (name) foundSmurf.name = name
    if (age) foundSmurf.age = age
    if (height) foundSmurf.height = height
    res.json(smurfs)
  }
})

app.delete('/smurfs/:id', (req, res) => {
  const { id } = req.params
  const foundSmurf = smurfs.find(smurf => smurf.id == id)

  if (foundSmurf) {
    const SmurfRemoved = { ...foundSmurf }
    smurfs = smurfs.filter(smurf => smurf.id != id)
    res.status(200).json(smurfs)
  } else {
    send_user_error('No smurf by that ID exists in the smurf DB', res)
  }
})

/**
 * Start server
 */

async function start_server() {
  /**
   * Set process title.
   */

  process.title = 'smurfs'

  app.listen(port, err => {
    if (err) console.log(err)
    console.log(`Express app listening on port ${port}`)
  })
}

if (module === require.main) {
  start_server()
}

/**
 * Export app
 */

module.exports = app
