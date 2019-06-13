import React, {useState} from 'react';
import PropTypes  from 'prop-types'; 
import * as Utility from './utility';

import './modal.css';

const propTypes = {
  show: PropTypes.bool.isRequired,
  hideCallback: PropTypes.func.isRequired,
  withAnimation: PropTypes.bool.isRequired,
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
    withAnimation,
    startAnimation, 
    className,
    body,
    backdropStyle,
    modalStyle,
  } = props;

  const [marginTop, setMarginTop] = useState(0);
  

  let style= {...backdropStyle};
  style.display = show ? "block" : "none";
  


  let filteredModalStyle = Utility.getModalStyle(modalStyle, withAnimation);
  if(startAnimation){
    filteredModalStyle.marginTop = marginTop;
  }

  return (
    <>
      <div className={"modal-backdrop " + (show ? 'show': '')} style={style} onClick={hideCallback}></div>
      <div className={"modal " + (show ? 'show': '')} role="dialog" style={style} >
        <div className={"modal-dialog " + className } role="document" >
          <div 
            className={"modal-content " + (startAnimation ? "aniamtionActive" : "")} 
            style={filteredModalStyle} 
            onWheel={(e) => Utility.onWheelEventHandler(e, marginTop, setMarginTop)}
            >
            { body }
          </div>
        </div>     
      </div>   
    </>
  )
}

ModalTemplate.propTypes = propTypes;

export default ModalTemplate;
