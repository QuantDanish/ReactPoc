import React from 'react';
import PropTypes  from 'prop-types'; 

import './modal.css';

const propTypes = {
  show: PropTypes.bool.isRequired,
  hideCallback: PropTypes.func.isRequired,
  startAnimation: PropTypes.bool.isRequired,
  modalStyle: PropTypes.object.isRequired,
  backdropStyle: PropTypes.object.isRequired,
  body: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]).isRequired
};

const ModalTemplate = (props) => {
  const {
    show, 
    hideCallback, 
    startAnimation, 
    className,
    body,
    backdropStyle,
    modalStyle,
  } = props;


  let style= {...backdropStyle};
  style.display = show ? "block" : "none";
  
  let styleWithoutMargin = getModalStyle(modalStyle);
  return (
    <>
      <div className={"modal-backdrop " + (show ? 'show': '')} style={style} onClick={hideCallback}></div>
      <div className={"modal " + (show ? 'show': '')} role="dialog" style={style} >
        <div className={"modal-dialog " + className } role="document" >
          <div className={"modal-content " + (startAnimation ? "aniamtionActive" : "")} style={styleWithoutMargin} >
            { body }
          </div>
        </div>     
      </div>   
    </>
  )
}

const getModalStyle = style => {
  let styleWithoutMargin = {};
  for (const key in style) {
    if (style.hasOwnProperty(key) && !key.match(/margin/i)) {
      styleWithoutMargin[key] = style[key];
      
    }
  }
  return styleWithoutMargin;
}

ModalTemplate.propTypes = propTypes;

export default ModalTemplate;
