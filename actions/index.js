export const ACTIONS = {
  LEFT_VALUE_INPUT: `LEFT_VALUE_INPUT`,
  LEFT_UNIT_CHANGED: `LEFT_UNIT_CHANGED`,
  RIGHT_VALUE_INPUT: `RIGHT_VALUE_INPUT`,
  RIGHT_UNIT_CHANGED: `RIGHT_UNIT_CHANGED`,
}

export const leftValueAction = leftValue => ({
  type: ACTIONS.LEFT_VALUE_INPUT,
  leftValue,
})

export const rightValueAction = rightValue => ({
  type: ACTIONS.RIGHT_VALUE_INPUT,
  rightValue,
})

export const leftUnitAction = leftUnit => ({
  type: ACTIONS.LEFT_UNIT_CHANGED,
  leftUnit,
})

export const rightUnitAction = rightUnit => ({
  type: ACTIONS.RIGHT_UNIT_CHANGED,
  rightUnit,
})
