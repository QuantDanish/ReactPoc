import React from 'react';
import PropTypes from 'prop-types';
import ModalHeader from './ModalHeader';

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
          <div className="modal-footer">
            <div className="flex-fill">{footer}</div>
            <button type="button" className="btn btn-primary" onClick={hideCallback}>Close</button>
          </div>
        </>
  );
}


ModalBody.propTypes = propTypes;

export default ModalBody
