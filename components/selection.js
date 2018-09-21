import { pipe, map, curry } from 'ramda'
import { UNITS } from '../constants'

const handleChange = (dispatch, action) => e => dispatch(action(e.target.value))

const selection = curry((dispatch, action, unit, options) => (
  <select
    className={`db w-100 pa2 bn input-reset br2 br--bottom bg-near-white`}
    value={unit}
    onChange={handleChange(dispatch, action)}
  >
    {options}
  </select>
))

const options = unit => <option key={unit} value={unit}>{unit}</option>

export const UnitSelection = ({ dispatch, action, unit }) => pipe(
  map(options),
  selection(dispatch, action, unit)
)(UNITS)
