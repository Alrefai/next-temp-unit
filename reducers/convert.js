import { pipe, pathOr, identity } from 'ramda'

const round = number => Math.round(number * 10) / 10
const cToF = pipe(value => 9/5 * value + 32, round)
const fToC = pipe(value => 5/9 * (value - 32), round)
const cToK = pipe(value => value + 273.15, round)
const kToC = pipe(value => value - 273.15, round)
const fToK = pipe(fToC, cToK)
const kToF = pipe(kToC, cToF)

const unitConversions = {
  Celsius: {
    Fahrenheit: cToF, Kelvin: cToK
  },
  Fahrenheit: {
    Celsius: fToC, Kelvin: fToK
  },
  Kelvin: {
    Celsius: kToC, Fahrenheit: kToF
  },
}

export const convert = (fromUnit, toUnit, value) => pathOr(
  identity,
  [fromUnit, toUnit],
  unitConversions
)(value)
