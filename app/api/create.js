import bodyParser from 'body-parser'
import express from 'express'

import Record from '../lib/record'
import splitString from '../lib/split-string'
import { isValidLine } from '../lib/validations'
import zipToRecord from '../lib/zip-to-record'

let datastore

const api = express()

api.use(bodyParser.text({ type: 'text/plain' }))

api.post('/', async (req, res) => {
  const line = req.body

  if (!isValidLine(line)) {
    return res.status(400)
      .json({
        error: {
          status: 400,
          detail: 'Data was not valid'
        }
      })
  }

  const record = zipToRecord([ 'LastName', 'FirstName', 'Gender', 'FavoriteColor', 'DateOfBirth' ],
                             splitString(line))

  const saved = await datastore.create(record)
    .then((data) => new Record(data))

  res.status(201).json({
    data: saved
  })
})

export default function create ({ db }) {
  datastore = db
  return api
}

