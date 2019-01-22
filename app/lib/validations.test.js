import {
  hasDelimiter,
  isValidLine,
  startsWithLetter
} from './validations'

describe('startsWithLetter', () => {
  it('is valid when line starts with a letter', () => {
    expect(startsWithLetter('Michael|Myers')).toEqual(true)
    expect(startsWithLetter('michael|myers')).toEqual(true)
  })


  it('is not valid when line is blank', () => {
    expect(startsWithLetter('')).toEqual(false)
    expect(startsWithLetter(undefined)).toEqual(false)
    expect(startsWithLetter('        \n')).toEqual(false)
  })

  it('is not valid when line does not start with a letter', () => {
    expect(startsWithLetter('1,2,3')).toEqual(false)
    expect(startsWithLetter('; this is a comment')).toEqual(false)
    expect(startsWithLetter('-- this is also a coment')).toEqual(false)
  })
})

describe('hasDelimiter', () => {
  it('is valid when line contains a delimiter', () => {
    expect(hasDelimiter('one   two   three')).toEqual(true)
    expect(hasDelimiter('one | two | three')).toEqual(true)
    expect(hasDelimiter('one, two, three')).toEqual(true)
  })

  it('is not valid when line does not contain delimiter', () => {
    expect(hasDelimiter()).toEqual(false)
    expect(hasDelimiter('onetwothree')).toEqual(false)
    expect(hasDelimiter('one:two:three')).toEqual(false)
  })
})

describe('isValidLine', () => {
  it('is valid when line starts with a letter and is delimited', () => {
    expect(isValidLine('Mike, Tyson, 58, 50, 6, 2, 44')).toEqual(true)
  })

  it('is not valid when a line does not start with a letter or is delimited', () => {
    expect(isValidLine('58, 50, 6, 2, 44, Tyson, Mike')).toEqual(false)
    expect(isValidLine('Mike!Tyson!Heavyweight')).toEqual(false)
    expect(isValidLine()).toEqual(false)
  })
})
