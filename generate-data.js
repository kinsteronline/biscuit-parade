import faker from 'faker'
import minimist from 'minimist'
import dateFormat from './app/lib/date-format'

const { _: files, ...options } = minimist(process.argv.slice(2))

const count = parseInt(options.lines, 10) || 100
const delimiter = options.delimiter || ' '

// it would be great to be able to pipe this right into import

console.log([
  'LastName', 'FirstName', 'Gender', 'FavoriteColor', 'DateOfBirth'
].join(delimiter))

for (let i = 0; i <= count ; i++) {
  console.log([
    faker.name.lastName(),
    faker.name.firstName(),
    (faker.random.number({ min: 0, max: 100 }) >= 50) ? 'F' : 'M',
    faker.commerce.color().replace(/\s+/, ''),
    dateFormat(faker.date.between(new Date(1969,0,1), new Date(2009,12,31)))
  ].join(delimiter))
}

