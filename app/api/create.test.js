import { default as request } from 'supertest'

import * as db from './db'
import server from './create'

const api = server({ db })

describe('create', () => {
  afterEach(() => {
    db.clean()
  })

  it('should respond with created', async () => {
    const response = await request(api)
      .post('/')
      .set('Content-Type', 'text/plain')
      .send('LastName,FirstName,Gender,FavoriteColor,DateOfBirth')

    expect(response.statusCode).toEqual(201)
    expect(response.body).toHaveProperty('data')
  })

  it('should respond with bad request without delimiter', async () => {
    const response = await request(api)
      .post('/')
      .set('Content-Type', 'text/plain')
      .send('LastName*FirstName*Gender*FavoriteColor*DateOfBirth')

    expect(response.statusCode).toEqual(400)
    expect(response.body).toHaveProperty('error')
  })
})

