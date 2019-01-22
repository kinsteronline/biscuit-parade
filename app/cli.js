import chalk from 'chalk'
import minimist from 'minimist'
import path from 'path'
import {
  table,
  getBorderCharacters
} from 'table'

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

function showHelp () {
  console.log()
  console.log(chalk.white('Usage: import [ --nice-tables --help ] filename'))
  console.log()
  console.log(chalk.gray('Options'))
  console.log(chalk.gray('  --nice-tables Show data in a nice table'))
  console.log(chalk.gray('  --help This help'))
  console.log()

  process.exit(0)
}

const displayTable = (options, data) => {
  const rows = [ ...data ]

  const isNice = options['nice-tables'] === true
  const config = {
    border: getBorderCharacters(isNice ? 'honeywell' : 'void'),
    columnDefault: {
      paddingLeft: isNice ? 1 : 0
    }
  }

  if (!isNice) Object.assign(config, { drawHorizontalLine: () => false })
  if (isNice) rows.unshift([ 'LastName', 'FirstName', 'Gender', 'Color', 'DateOfBirth' ])

  return table(rows, config)
}

const toTableData = (record) => [
  record.lastName,
  record.firstName,
  record.gender,
  record.favoriteColor,
  dateFormat(record.dateOfBirth)
]

const main = async (args) => {
  const { _: files, ...options } = minimist(args, { boolean: true })

  if (options.help) showHelp()
  if (files.length === 0) throw new Error('Need at least one file to parse')

  const filepath = path.join(process.cwd(), files[0])

  const [ header, ...rows ] = await fileToArray(filepath)
    .then((lines) => lines.filter(isValidLine))

  const keys = splitString(header)
  const records = rows
    .map((row) => zipToRecord(keys, splitString(row)))

  return [ options, records ]
}

main(process.argv.slice(2))
  .then(([ options, records ]) => {

    console.log('\nOutput 1: Sorted by gender then last name')
    console.log(displayTable(options, byGenderThenLastNameAsc(records).map(toTableData)))

    console.log('\nOutput 2: Sorted by birth date')
    console.log(displayTable(options, byBirthDateAsc(records).map(toTableData)))

    console.log('\nOutput 3: Sorted by last name descending')
    console.log(displayTable(options, byLastNameDesc(records).map(toTableData)))

    process.exit(0)
  })
  .catch(err => {
    console.log(chalk.red('Error importing file'))
    console.log(chalk.red(err.message))
    process.exit(1)
  })
