import zipToRecord, { zipToObject, mapProperties } from './zip-to-record'

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
})

describe('mapProperties', () => {
  it('should include properties of a recrd', () => {
    const obj = mapProperties({
      LastName: 'Barker',
      FirstName: 'Robert',
      Gender: 'M',
      FavoriteColor: 'Silver',
      DateOfBirth: '02/01/1948'
    })

    expect(obj).toHaveProperty('firstName', 'Robert')
    expect(obj).toHaveProperty('lastName', 'Barker')
    expect(obj).toHaveProperty('gender', 'M')
    expect(obj).toHaveProperty('favoriteColor', 'Silver')
    expect(obj).toHaveProperty('dateOfBirth', '02/01/1948')
  })

  it('should not include a property not part of a record', () => {
    const obj = mapProperties({
      LastName: 'Barker',
      FirstName: 'Robert',
      Job: 'Host'
    })

    expect(obj).not.toHaveProperty('job')
    expect(obj).not.toHaveProperty('Job')
    expect(obj).toHaveProperty('lastName', 'Barker')
    expect(obj).toHaveProperty('firstName', 'Robert')
  })
})
