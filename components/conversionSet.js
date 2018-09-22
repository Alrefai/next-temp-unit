import { UnitSection } from './unitSection'
import { ConversionSwitch } from './conversionSwitch'
import {
  leftValueAction,
  leftUnitAction,
  rightValueAction,
  rightUnitAction,
  changeSourceAction,
} from '../actions'

const handleChange = (dispatch, action) => e => dispatch(action(e.target.value))

const ConversionSet = ({
  dispatch,
  model: { leftValue, leftUnit, rightValue, rightUnit, sourceLeft },
}) => (
  <div className={`flex`}>
    <UnitSection
      value={leftValue}
      unit={leftUnit}
      source={sourceLeft}
      onInput={handleChange(dispatch, leftValueAction)}
      onSelect={handleChange(dispatch, leftUnitAction)}
    />
    <ConversionSwitch
      children={sourceLeft ? `\u232A` : `\u2329`}
      onClick={() => dispatch(changeSourceAction)}
    />
    <UnitSection
      value={rightValue}
      unit={rightUnit}
      source={!sourceLeft}
      onInput={handleChange(dispatch, rightValueAction)}
      onSelect={handleChange(dispatch, rightUnitAction)}
    />
  </div>
)

export default ConversionSet
