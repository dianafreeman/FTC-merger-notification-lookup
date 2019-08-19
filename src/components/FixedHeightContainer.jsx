import React from 'react';
import PropTypes from 'prop-types';
import SimpleBar from 'simplebar-react';


const FixedHeightContainer = ({ children }) => {
  const style = {
    height: 'fit-content',
    maxHeight: '80vh',
    marginBottom: '2em',
    padding: '1em',
    textAlign: 'center',
  };
  return (
    <SimpleBar style={style}>
      {children}
    </SimpleBar>
  );
};
export default FixedHeightContainer;

FixedHeightContainer.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};
