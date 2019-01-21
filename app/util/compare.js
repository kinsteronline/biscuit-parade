
const genders = [ 'f', 'm' ]

export function defaultCompare (a, b) {
  if (a < b) return -1
  if (a > b) return 1
  return 0
}

export function genderCompare (a, b) {
  // moar d###
  const x = a.gender.toLowerCase()
  const y = b.gender.toLowerCase()

  if (!(genders.includes(x) && genders.includes(y))) throw new Error('Genders accepted: f and m')

  if (x === y) return 0
  return (x === 'f') ? -1 : 1
}

