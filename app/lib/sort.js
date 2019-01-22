import {
  defaultCompare,
  genderCompare
} from './compare'

//
// Create a copy of the records passed in for all sorts
//

export function byGenderThenLastNameAsc (records = []) {
  return [...records].sort((a, b) => {
    let result = genderCompare(a, b)
    if (result === 0) {
      result = defaultCompare(a.lastName, b.lastName)
    }
    return result
  })
}

export function byBirthDateAsc (records = []) {
  return [...records].sort((a, b) => {
    return defaultCompare(new Date(a.dateOfBirth).getTime(),
                          new Date(b.dateOfBirth).getTime())
  })
}


export function byLastNameDesc (records = []) {
  return [...records].sort((a, b) => {
    return -defaultCompare(a.lastName, b.lastName)
  })
}

