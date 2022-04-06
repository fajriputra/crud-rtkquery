import { oneOfType, func, string, number, bool } from "prop-types";

export default function Input(props) {
  const { label, type, onChange, name, value } = props;

  return (
    <>
      {label && (
        <label style={{ marginRight: 8 }} htmlFor={`input-${name}`}>
          {label}
        </label>
      )}
      <input onChange={onChange} name={name} value={value} type={type} />
    </>
  );
}

Input.defaultProps = {
  type: "text",
};

Input.propTypes = {
  label: string.isRequired,
  onChange: func.isRequired,
  name: string.isRequired,
  value: oneOfType([string, number]),
};
