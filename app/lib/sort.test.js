import Record from './record'
import {
  byGenderThenLastNameAsc,
  byBirthDateAsc,
  byLastNameDesc,
  quick,
  merge
} from './sort'

const chaka = new Record({
  firstName: 'Chaka',
  lastName: 'Kahn',
  gender: 'F',
  favoriteColor: 'Red',
  dateOfBirth: '1953/03/23'
})
const lilwayne = new Record({
  firstName: 'Dwayne',
  lastName: 'Carter',
  gender: 'M',
  favoriteColor: 'Platinum',
  dateOfBirth: '1982/10/27'
})
const prince = new Record({
  firstName: 'Prince',
  lastName: 'Nelson',
  gender: 'M',
  favoriteColor: 'Purple',
  dateOfBirth: '1958/06/07'
})
const missy = new Record({
  firstName: 'Missy',
  lastName: 'Elliot',
  gender: 'F',
  favoriteColor: 'Gold',
  dateOfBirth: '1971/07/01'
})
const roberta = new Record({
  firstName: 'Roberta',
  lastName: 'Flack',
  gender: 'F',
  favoriteColor: 'Blue',
  dateOfBirth: '1937/02/10'
})

const records = [
  chaka, lilwayne, prince, missy, roberta
]

describe('sort', () => {
  it('should return empty with no records', () => {
    expect(byGenderThenLastNameAsc()).toEqual([])
    expect(byBirthDateAsc()).toEqual([])
    expect(byLastNameDesc()).toEqual([])
  })

  it('should sort by gender then last name', () => {
    const sorted = byGenderThenLastNameAsc(records)
    expect(sorted).toEqual([ missy, roberta, chaka, lilwayne, prince ])
    expect(records).not.toStrictEqual(sorted)
  })

  it('should sort by birthdate', () => {
    const sorted = byBirthDateAsc(records)
    expect(sorted).toEqual([ roberta, chaka, prince, missy, lilwayne ])
    expect(records).not.toStrictEqual(sorted)
  })

  it('should sort by last name descending', () => {
    const sorted = byLastNameDesc(records)
    expect(sorted).toEqual([ prince, chaka, roberta, missy, lilwayne ])
    expect(records).not.toStrictEqual(sorted)
  })
})

describe('quick sort', () => {
  it('should sort, correctly', () => {
    expect(quick([ 22, 9, 60, 12, 4, 56 ])).toEqual([ 4, 9, 12, 22, 56, 60 ])
  })
})

describe('merge sort', () => {
  it('should sort, correctly', () => {
    expect(merge([ 22, 9, 60, 12, 4, 56 ])).toEqual([ 4, 9, 12, 22, 56, 60 ])
  })
})
