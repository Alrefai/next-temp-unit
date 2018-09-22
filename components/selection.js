import { pipe, map, curry } from 'ramda'
import { UNITS } from '../constants'

const selection = curry((onChange, unit, options) => (
  <select
    className={`w-100 pa2 bn input-reset br2 br--bottom bg-near-white pointer`}
    value={unit}
    {...{ onChange }}
  >
    {options}
  </select>
))

const options = unit => <option key={unit} value={unit}>{unit}</option>

export const UnitSelection = ({ onChange, unit }) => pipe(
  map(options),
  selection(onChange, unit)
)(UNITS)
