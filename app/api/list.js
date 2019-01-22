import express from 'express'

import {
  byBirthDateAsc,
  byGenderThenLastNameAsc,
  byLastNameDesc
} from '../util/sort'

import { mapProperties } from '../util/zip-to-record'
import Record from '../util/record'

let datastore

const dispatch = new Map([
  [ 'gender', byGenderThenLastNameAsc ],
  [ 'birthdate', byBirthDateAsc ],
  [ 'name', byLastNameDesc ]
])

const api = express()

api.get('/:sortby', async (req, res) => {
  if (!dispatch.has(req.params.sortby)) {
    return res.status(400)
      .send({
        error: {
          status: 400,
          detail: 'Unknown sort option. Available: birthdate, gender, name'
        }
      })
  }

  const records = await datastore.all()
    .then((records) => dispatch.get(req.params.sortby)(records))

  res.json({ data: records })
})

export default function list ({ db }) {
  datastore = db
  return api
}

