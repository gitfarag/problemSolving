# Csv app

## technologies

- Runtime: Node.js
- Language: JavaScript
- Testing: Jasmine and Supertest
- dependencies : {
  "jasmine": "^4.4.0",
  "jasmine-spec-reporter": "^7.0.0",
  "csv-parser": "^3.0.0",
  "fs": "^0.0.1-security",
  "objects-to-csv": "^1.3.6",
  "readline": "^1.3.0"
  }
- Design: MVC

## Installation Instructions

First, install the app's dependencies using the following:
`npm istall`

### start mode

Then run the app
`npm run start`.

### Test mode

To run the tests execute
`npm run test`.

## How to use

- copy and past the .csv file into in the root directory of the application
- start the app
- enter the name of the file in terminal
- thats all

## How it works

- the app take the input_file_name.csv from the user
- pass the name to the controller which readStream the target file
- pass tha data to the services and services returns data agait
- controller write the new files
