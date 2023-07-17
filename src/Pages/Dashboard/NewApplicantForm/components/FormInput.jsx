import PropTypes from "prop-types";

export function TextInput({ label, name, value, onChange, required }) {
  return (
    <label className="NewApplicantForm-label">
      <span className="NewApplicantForm-span">{label}</span>
      <input
        className="NewApplicantForm-input"
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        required={required}
      />
    </label>
  );
}

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
};

export function SelectInput({ label, name, options, value, onChange }) {
  return (
    <label className="NewApplicantForm-label">
      <span className="NewApplicantForm-span">{label}</span>
      <select
        className="NewApplicantForm-select"
        name={name}
        id={name}
        value={value}
        onChange={onChange}
      >
        {options.map((option, index) => (
          <option
            className="NewApplicantForm-option"
            key={index}
            value={option}
          >
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

SelectInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export function DateInput({ label, name, value, onChange, required }) {
  return (
    <label className="NewApplicantForm-label">
      <span className="NewApplicantForm-span">{label}</span>
      <input
        className="NewApplicantForm-input"
        type="date"
        name={name}
        value={value}
        onChange={onChange}
        required={required}
      />
    </label>
  );
}

DateInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
};

export function NumberInput({ label, name, value, onChange, required }) {
  return (
    <label className="NewApplicantForm-label">
      <span className="NewApplicantForm-span">{label}</span>
      <input
        className="NewApplicantForm-input"
        type="number"
        name={name}
        value={value}
        onChange={onChange}
        required={required}
      />
    </label>
  );
}

NumberInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
};
