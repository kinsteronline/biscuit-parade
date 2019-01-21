import { regex as delimiters } from './delimiters'

const startsWith = /^[a-zA-z]+.*/

export function startsWithLetter (line = '') {
  return line.match(startsWith) !== null
}

export function hasDelimiter (line = '') {
  return line.match(delimiters) !== null
}

export function isValidLine (line = '') {
  return startsWithLetter(line) && hasDelimiter(line)
}

