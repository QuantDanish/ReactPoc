import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  header: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]),
  hideCallback: PropTypes.func.isRequired
};

const defaultProps = {
  header: ''
};

let style = {
  borderBottom: 'none'
}

const ModalHeader = ({header, hideCallback}) => {
  const customHeader = isCustomHeader(header);

  return (
    <div className="modal-header" style={customHeader ? style : null}>
      {customHeader ? null : <h5 className="modal-title">{header}</h5>}
      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true" onClick={hideCallback}>&times;</span>
      </button>
    </div>
  )
}

const isCustomHeader = header => {
  return header.trim().length === 0;
};


ModalHeader.propTypes = propTypes;
ModalHeader.defaultProps = defaultProps;

export default ModalHeader
