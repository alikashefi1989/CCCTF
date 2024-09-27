# Convert Country Code To Flag

How can install?

npm i ccctf

## Usage

The main feature of this library is to create a country's flag using the country's phone code, and other applications such as receiving a list of countries with the same code, receiving the country's code with the country's name, etc.

## example

- code:

```js

import ccctf from 'ccctf/src/index.ts'

const usFlag = ccctf('us') 

console.log(usFlag)

// '🇺🇸'

```

```js

import { gcc } from 'ccctf/src/index.ts'

const usCode = gcc('us') 

console.log(usCode)

// '+1'

```

```js

import { gcnbc } from 'ccctf/src/index.ts'

const listOfCountriesWithCodeIs_1 = gcnbc('+1') 
const listOfCountriesWithCodeIs_90 = gcnbc('+90') 

console.log(listOfCountriesWithCodeIs_1)
console.log(listOfCountriesWithCodeIs_90)

// ['CA', 'US']
// ['TR']

```