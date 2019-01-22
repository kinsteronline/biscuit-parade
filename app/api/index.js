
import express from 'express'
import pino from 'pino'
import expressPino from 'express-pino-logger'

import * as db from './db'

import create from './create'
import list from './list'

const {
  NODE_ENV = 'development'
} = process.env

const logger = pino({
  enabled: NODE_ENV !== 'test',
  prettyPrint: NODE_ENV === 'development',
  levelFirst: NODE_ENV === 'development'
})

const api = express()

api.use(expressPino({ logger }))

api.use('/records', create({ db }))
api.use('/records', list({ db }))

export default function () {
  return api
}


