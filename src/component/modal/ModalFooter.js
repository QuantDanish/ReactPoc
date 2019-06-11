import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  footer: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  hideCallback: PropTypes.func,
  showTopBorder: PropTypes.bool,
  showCloseButton: PropTypes.bool,
  buttonText: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  buttonStyle: PropTypes.object
};

const defaultProps = {
  footer: null,
  showTopBorder: false,
  showCloseButton: true,
  buttonText: 'Close',
  buttonStyle: null
}

const ModalFooter = ({
  footer,
  hideCallback,
  showTopBorder,
  showCloseButton,
  buttonText,
  buttonStyle,
}) => {

  let style = (showTopBorder ? null : {borderTop: 'none'});
  return (
    <div className="modal-footer" style={style}>
      { (footer !== null )
        ? (<div className="flex-fill">{footer}</div>)
        : null
      }
      { showCloseButton
        ? (<button style={buttonStyle} type="button" className="btn btn-primary" onClick={hideCallback}>{buttonText}
          </button>)
        : null
      }
    </div>
  )
}

ModalFooter.propTypes = propTypes;
ModalFooter.defaultProps = defaultProps;

export default ModalFooter;
