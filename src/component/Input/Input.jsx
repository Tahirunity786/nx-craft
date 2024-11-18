import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ type = 'text', className = '', id, placeholder = '', ...props }) => {
  return (
    <input
      type={type}
      className={className}
      id={id}
      placeholder={placeholder}
      {...props} // This allows for additional props like 'onChange', 'value', etc.
    />
  );
};

// Define prop types for better readability and debugging
Input.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
};

// Default props in case they are not provided
Input.defaultProps = {
  type: 'text',
  className: '',
  placeholder: '',
};

export default Input;
