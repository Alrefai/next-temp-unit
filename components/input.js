const handleChange = (dispatch, action) => e => dispatch(action(e.target.value))

export const InputField = ({ value, dispatch, action }) => (
  <input
    {...{ value }}
    placeholder={`input...`}
    className={`pa2 input-reset bn br2 br--top w-100 bg-dark-gray near-white`}
    onChange={handleChange(dispatch, action)}
  />
)
