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

//
// todo: apply with comparison
// export function quick (compareFn?, xs = []) {
//
export function quick (xs = []) {
  if (xs.length < 2) return xs

  const pivot = xs[0]
  const smaller = xs.slice(1).filter((x) => x < pivot)
  const larger = xs.slice(1).filter((x) => x >= pivot)

  return [...quick(smaller), pivot, ...quick(larger)]
}

function mergeArrays (a, b) {
  if (a.length === 0) return b
  if (b.length === 0) return a

  if (a[0] < b[0]) {
    return [ a[0] ].concat(mergeArrays(a.slice(1), b))
  } else {
    return [ b[0] ].concat(mergeArrays(a, b.slice(1)))
  }
}

export function merge (xs = []) {
  const length = xs.length
  if (length <= 1) return xs

  const left = merge(xs.slice(0, Math.floor(length / 2)))
  const right = merge(xs.slice(Math.floor(length / 2), length))

  return mergeArrays(left, right)
}
