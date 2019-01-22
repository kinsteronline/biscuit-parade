
import express from 'express'
import pino from 'express-pino-logger'

import * as db from './db'

import create from './create'
import list from './list'

const api = express()

api.use('/records', create({ db }))
api.use('/records', list({ db }))

export default function () {
  return api
}


