import { db } from './db'

const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router(db)
const middlewares = jsonServer.defaults()
const port = process.env.PORT || 3200

server.use(middlewares)
server.use(router)

server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`)
})