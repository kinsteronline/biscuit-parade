import Record from './record'

const propMap = new Map([
  [ 'LastName', 'lastName' ],
  [ 'FirstName', 'firstName' ],
  [ 'Gender', 'gender' ],
  [ 'FavoriteColor', 'favoriteColor' ],
  [ 'DateOfBirth', 'dateOfBirth' ]
])

export function zipToObject (keys, values) {
  return keys.reduce((obj, key, index) => {
    obj[key] = values[index]
    return obj
  }, {})
}

export default function zipToRecord (keys, values) {
  const mapped = Object
    .entries(zipToObject(keys, values))
    .reduce((obj, [ key, value ]) => {
      if (propMap.has(key)) obj[propMap.get(key)] = value
      return obj
    }, {})

  return new Record(mapped)
}


