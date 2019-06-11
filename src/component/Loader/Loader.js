import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Loader = ({isLoading, children, className}) => {
  const content = 
              isLoading ? 
              ( <div className={className}>
                  <span className='sr-only'>Loading..</span>
                </div> 
              ):
              children;
  return content;
};

Loader.propTypes = {
  children: PropTypes.element,
  className: PropTypes.string,
  isLoading: PropTypes.bool.isRequired,
  delay: PropTypes.number
}

Loader.defaultProps = {
  className: 'spinner-border',
  delay: 100
}

export default Loader;
