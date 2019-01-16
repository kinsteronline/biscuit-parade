import chalk from 'chalk'

const main = async (args) => {
  console.log(chalk.white('doing work'))
}

main(process.argv)
  .then(results => {
    console.log(chalk.green('done'))
    process.exit(0)
  })
  .catch(err => {
    console.log(chalk.red('broke'))
    process.exit(1)
  })
