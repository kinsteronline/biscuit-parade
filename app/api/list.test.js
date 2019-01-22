import { default as request } from 'supertest'

import * as db from './db'
import server from './list'

const api = server({ db })

describe('list', () => {
  afterEach(() => {
    db.clean()
  })

  it('should respond with bad request with unknown sort option', async () => {
    const response = await request(api).get('/location')
    expect(response.statusCode).toEqual(400)
    expect(response.body).toHaveProperty('error')
  })

  it('should respond with ok', async () => {
    await db.create({ firstName: 'Velvet', lastName: 'Jones' })
    const response = await request(api).get('/gender')
    expect(response.statusCode).toEqual(200)
    expect(response.body).toHaveProperty('data')
  })
})

