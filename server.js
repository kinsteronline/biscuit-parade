import api from './app/api'

const {
  HTTP_PORT = 5000,
  HTTP_ADDRESS = '0.0.0.0'
} = process.env

const server = api()
server.listen(HTTP_PORT, HTTP_ADDRESS, () => {
  console.log(`API listening on ${HTTP_ADDRESS}:${HTTP_PORT}`)
})

