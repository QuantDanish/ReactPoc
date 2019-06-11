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
  hideCallback: PropTypes.func.isRequired
}

const ModalBody = ({header, hideCallback, content, footer}) => {
  return (
        <>
          <ModalHeader header={header} hideCallback={hideCallback} />
          <div className="modal-body">
            {content}
          </div>
          <ModalFooter footer={footer} hideCallback={hideCallback}/>
        </>
  );
}


ModalBody.propTypes = propTypes;

export default ModalBody
