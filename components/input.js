export const InputField = ({ value, onChange }) => (
  <input
    {...{ value, onChange }}
    placeholder={`input...`}
    className={`pa2 input-reset bn br2 br--top w-100 bg-dark-gray near-white`}
  />
)
