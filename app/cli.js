import chalk from 'chalk'
import minimist from 'minimist'
import path from 'path'

import dateFormat from './lib/date-format'
import fileToArray from './lib/file-to-array'
import splitString from './lib/split-string'
import { isValidLine } from './lib/validations'
import zipToRecord from './lib/zip-to-record'
import {
  byGenderThenLastNameAsc,
  byBirthDateAsc,
  byLastNameDesc
} from './lib/sort'

const plainText = (record) => {
  return `${record.firstName} ${record.lastName} (${record.gender}) ${dateFormat(record.dateOfBirth)} ${record.favoriteColor}`
}

const main = async (args) => {
  const { _: files, ...options } = minimist(args)
  if (files.length === 0) throw new Error('Need at least one file to parse')

  const filepath = path.join(process.cwd(), files[0])

  const [ header, ...rows ] = await fileToArray(filepath)
    .then((lines) => lines.filter(isValidLine))

  const keys = splitString(header)
  const records = rows
    .map((row) => zipToRecord(keys, splitString(row)))

  return records
}

main(process.argv.slice(2))
  .then(records => {
    console.log('-'.repeat(40))
    console.log('Output 1: Sorted by gender then last name')
    byGenderThenLastNameAsc(records).forEach((record) => {
      console.log(plainText(record))
    })

    console.log('-'.repeat(40))
    console.log('Output 2: Sorted by birth date')
    byBirthDateAsc(records).forEach((record) => {
      console.log(plainText(record))
    })

    console.log('-'.repeat(40))
    console.log('Output 3: Sorted by last name descending')
    byLastNameDesc(records).forEach((record) => {
      console.log(plainText(record))
    })

    console.log(chalk.green('done'))
    process.exit(0)
  })
  .catch(err => {
    console.log(chalk.red('broke'))
    console.log(err)
    process.exit(1)
  })
