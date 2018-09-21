import { pipe, defaultTo } from 'ramda'
import { convert } from './convert'
import { ACTIONS } from '../actions'

const toInt = pipe(parseInt, defaultTo(0))

const reducer = (model, action) => {
  switch (action.type) {
    case ACTIONS.LEFT_VALUE_INPUT: {
      const { leftUnit, rightUnit } = model
      const leftValue = toInt(action.leftValue)
      const rightValue = convert(leftUnit, rightUnit, leftValue)
      return action.leftValue === ``
        ? { ...model, sourceLeft: true, leftValue: ``, rightValue: `` }
        : { ...model, leftValue, sourceLeft: true, rightValue }
    }
    case ACTIONS.RIGHT_VALUE_INPUT: {
      const { leftUnit, rightUnit } = model
      const rightValue = toInt(action.rightValue)
      const leftValue = convert(rightUnit, leftUnit, rightValue)
      return action.rightValue === ``
        ? { ...model, sourceLeft: false, leftValue: ``, rightValue: `` }
        : { ...model, rightValue, sourceLeft: false, leftValue }
    }
    case ACTIONS.LEFT_UNIT_CHANGED: {
      const { leftUnit } = action
      const { rightUnit, sourceLeft } = model
      const leftValue = sourceLeft ? model.leftValue || 0
        : convert(rightUnit, leftUnit, model.rightValue)
      const rightValue = !sourceLeft ? model.rightValue || 0
        : convert(leftUnit, rightUnit, model.leftValue)
      return { ...model, leftUnit, leftValue, rightValue }
    }
    case ACTIONS.RIGHT_UNIT_CHANGED: {
      const { rightUnit } = action
      const { leftUnit, sourceLeft } = model
      const rightValue = !sourceLeft ? model.rightValue || 0
        : convert(leftUnit, rightUnit, model.leftValue)
      const leftValue = sourceLeft ? model.leftValue || 0
        : convert(rightUnit, leftUnit, model.rightValue)
      return { ...model, rightUnit, leftValue, rightValue }
    }
    default:
      return model
  }
}

export default reducer
