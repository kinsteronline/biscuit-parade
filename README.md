# biscuit-parade

A simple app server for data

*Install*
```
$ yarn install
$ npm install
```

*Start a server*
```
$ yarn start
$ npm start
$ node -r esm server.js
```

*Run some tests*
```
$ yarn test
$ npm test

$ yarn test:verbose
$ npm run test:verbose

$ yarn test:coverage
$ npm run test:coverage

$ npx jest
```

*Import a file*
```
$ ./bin/import --help
$ ./bin/import filename
$ ./bin/import --nice-tables file.csv
```

*Generate a fake data file*
```
$ node -r esm ./generate-data.js > sample.data
$ node -r esm ./generate-data.js --delimiter=, > sample.data
$ node -r esm ./generate-data.js --lines=10000 --delimiter=\| > sample.data
```
