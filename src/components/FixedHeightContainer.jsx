import React from 'react';
import PropTypes from 'prop-types';
import SimpleBar from 'simplebar-react';


const FixedHeightContainer = ({ children }) => (
  <SimpleBar className="scroll-container">
    {children}
  </SimpleBar>
);
export default FixedHeightContainer;

FixedHeightContainer.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};
