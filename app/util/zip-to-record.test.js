import zipToRecord, { zipToObject } from './zip-to-record'

describe('zipToObject', () => {
  it('should build object from key and value arrays', () => {
    const obj = zipToObject([ 'LastName', 'FirstName' ], [ 'James', 'Rick' ])
    expect(obj).toHaveProperty('LastName', 'James')
    expect(obj).toHaveProperty('FirstName', 'Rick')
  })
})

describe('zipToRecord', () => {
  it('should build a record from key and value arrays', () => {
    const record = zipToRecord([ 'LastName', 'FirstName', 'Gender', 'FavoriteColor', 'DateOfBirth' ],
                               [ 'James',    'Rick',      'M',      'Leather',       '02/01/1948'  ])

    expect(record).toHaveProperty('firstName', 'Rick')
    expect(record).toHaveProperty('lastName', 'James')
    expect(record).toHaveProperty('gender', 'M')
    expect(record).toHaveProperty('favoriteColor', 'Leather')
    expect(record).toHaveProperty('dateOfBirth', '02/01/1948')
  })

  it('should not include a property not part of a record', () => {
    const record = zipToRecord([ 'LastName', 'FirstName', 'Gender', 'FavoriteColor', 'DateOfBirth', 'Job' ],
                               [ 'Barker',   'Robert',    'M',      'Silver',        '12/12/1923',  'Host' ])

    expect(record).not.toHaveProperty('Job')
  })
})
