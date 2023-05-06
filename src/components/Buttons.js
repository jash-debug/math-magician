import React from 'react';
import PropTypes from 'prop-types';

function Button({
  value, id, className, buttonName,
}) {
  const onHandleClick = () => {
    buttonName(value);
  };
  return (
    <input
      type="button"
      value={value}
      id={id}
      className={className}
      onClick={onHandleClick}
    />
  );
}

Button.propTypes = {
  value: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  buttonName: PropTypes.func.isRequired,
};

export default Button;
