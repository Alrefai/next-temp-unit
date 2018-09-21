import { pipe } from 'ramda'

const round = number => Math.round(number * 10) / 10
const cToF = pipe(value => 9/5 * value + 32, round)
const fToC = pipe(value => 5/9 * (value - 32), round)
const cToK = pipe(value => value + 273.15, round)
const kToC = pipe(value => value - 273.15, round)

export const convert = (fromUnit, toUnit, value) => {
  switch (fromUnit) {
    case `Celsius`:
      return toUnit === `Celsius` ? value || 0
        : toUnit === `Fahrenheit` ? cToF(value) : cToK(value)
    case `Fahrenheit`:
      return toUnit === `Fahrenheit` ? value || 0
        : toUnit === `Celsius` ? fToC(value) : cToK(fToC(value))
    default:
      return toUnit === `Kelvin` ? value || 0
        : toUnit === `Celsius` ? kToC(value) : cToF(kToC(value))
  }
}
