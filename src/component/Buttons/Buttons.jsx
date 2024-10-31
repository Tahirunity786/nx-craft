import React from 'react';

const Buttons = ({ className, children, ...rest }) => {
  return (
    <button type="button" className={className} {...rest}>
      {children}
    </button>
  );
};

export default Buttons;

