const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

api_url = 'http://localhost:5000/api/v1/'

app.prepare()
.then(() => {
  const server = express()

  server.get('/tenders/:public_id', (req, res) => {
      const actualPage = '/tender'
      const queryParams = { public_id: req.params.public_id }
      app.render(req, res, actualPage, queryParams)
  })

  server.get('/apply/:public_id', (req, res) => {
    const actualPage = '/apply'
    const queryParams = { public_id: req.params.public_id }
    app.render(req, res, actualPage, queryParams)
  })

  server.get('/view/bids/:public_id', (req, res) => {
    const actualPage = '/orgbids'
    const queryParams = { public_id: req.params.public_id }
    app.render(req, res, actualPage, queryParams)
  })

  server.get('/readmore/:public_id', (req, res) => {
    const actualPage = '/readmore'
    const queryParams = { public_id: req.params.public_id }
    app.render(req, res, actualPage, queryParams)
})

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})