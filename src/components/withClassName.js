import React from 'react';

const withClassName = (WrappedComponent) => {
  return (props) => {
    const { className, ...otherProps } = props;
    return (
      <div className={className}>
        <WrappedComponent {...otherProps} />
      </div>
    );
  };
};

export default withClassName;
