import fs from 'fs'
import readline from 'readline'

// todo, deal with padded first blank lines of a file

//
// fileToArray :: string -> promise<[string]>
export default function fileToArray (filepath) {
  return new Promise((resolve, reject) => {
    const array = []

    try {
      const lineReader = readline.createInterface({
        input: fs.createReadStream(filepath),
        crlfDelay: Infinity
      })

      lineReader.on('line', array.push.bind(array))
      lineReader.on('close', () => resolve(array))

    } catch (err) {
      reject(err)
    }
  })
}

