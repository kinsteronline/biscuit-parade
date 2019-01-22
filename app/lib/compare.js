
const genders = [ 'f', 'm' ]

//
// Basic compare but don't force numbers into strings
export function defaultCompare (a, b) {
  if (a < b) return -1
  if (a > b) return 1
  return 0
}

// if not equal, female should be sorted before male
export function genderCompare (a, b) {
  const x = a.gender.toLowerCase()
  const y = b.gender.toLowerCase()

  if (!(genders.includes(x) && genders.includes(y))) throw new Error('Genders accepted: F and M')

  if (x === y) return 0
  return (x === 'f') ? -1 : 1
}

