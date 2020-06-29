'use strict'

const express = require('express')
const execa = require('execa')

const app = express()

// Routes
app.get('/*', async (req, res) => {
  const result = await execa('./binary')
  res.send(result.stdout)
})

// Error handler
app.use((err, req, res, next) => {
  console.error(err)
  res.status(500).send('Internal Serverless Error')
})

module.exports = app
