import {
  leftValueAction, leftUnitAction, rightValueAction, rightUnitAction
} from '../actions'
import { UnitSection } from './unitSection'

const ConversionSet = ({
  dispatch,
  model: { leftValue, leftUnit, rightValue, rightUnit, sourceLeft },
}) => (
  <div className={`flex`}>
    <UnitSection
      {...{ dispatch }}
      className={`mr1`}
      value={leftValue}
      unit={leftUnit}
      inputAction={leftValueAction}
      selectionAction={leftUnitAction}
      source={sourceLeft}
    />
    <UnitSection
      {...{ dispatch }}
      className={`ml1`}
      value={rightValue}
      unit={rightUnit}
      inputAction={rightValueAction}
      selectionAction={rightUnitAction}
      source={!sourceLeft}
    />
  </div>
)

export default ConversionSet
