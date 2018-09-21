import { InputField } from '../components/input'
import { UnitSelection } from '../components/selection'

export const UnitSection = (
  { className, dispatch, value, unit, inputAction, selectionAction, source }
) => (
  <div
    className={`
      ${className} ${source ? `pa2 br2 ba b--blue` : `pv2` } mv2 w-50
    `}
  >
    <InputField {...{ value, dispatch }} action={inputAction} />
    <UnitSelection {...{ dispatch, unit }} action={selectionAction} />
  </div>
)
