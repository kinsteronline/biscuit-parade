import { regex } from './delimiters'

export default function splitString (s = '', delimiter = regex) {
  return s.split(delimiter).map((split) => split.trim())
}

