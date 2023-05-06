// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

function Button({ value, id, className }) {
  return (
    <input
      type="button"
      value={value}
      id={id}
      className={className}
    />
  );
}

Button.propTypes = {
  value: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default Button;
