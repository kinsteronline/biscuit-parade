
const startsWithRe = /^[a-zA-z]+.*/
const hasDelimiterRe = /[\|,\s]+/

export function startsWithLetter (line = '') {
  return line.match(startsWithRe) !== null
}

export function hasDelimiter (line = '') {
  return line.match(hasDelimiterRe) !== null
}

export function isValidLine(line = '') {
  return startsWithLetter(line) && hasDelimiter(line)
}

