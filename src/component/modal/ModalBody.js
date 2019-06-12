import React from 'react';
import PropTypes from 'prop-types';
import ModalHeader from './ModalHeader';
import ModalFooter from './ModalFooter';

const propTypes = {
  header: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]),
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]),
  footer: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]),
  hideCallback: PropTypes.func.isRequired,
  showTopBorder: PropTypes.bool,
  showCloseButton: PropTypes.bool,
}

const ModalBody = ({
  header, 
  hideCallback, 
  content, 
  footer,
  showCloseButton,
  showTopBorder
}) => {
  return (
        <>
          <ModalHeader header={header} hideCallback={hideCallback} />
          <div className="modal-body">
            {content}
          </div>
          <ModalFooter 
            footer={footer} 
            hideCallback={hideCallback}
            showCloseButton={showCloseButton}
            showTopBorder={showTopBorder}
          />
        </>
  );
}


ModalBody.propTypes = propTypes;

export default ModalBody
