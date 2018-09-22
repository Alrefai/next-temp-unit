import { InputField } from '../components/input'
import { UnitSelection } from '../components/selection'

export const UnitSection = ({ value, unit, onInput, onSelect, source }) => (
  <div className={`${source ? `pa2 br2 ba b--blue` : `pv2` } mv2 w-50`}>
    <InputField {...{ value }} onChange={onInput} />
    <UnitSelection {...{ unit }} onChange={onSelect} />
  </div>
)
