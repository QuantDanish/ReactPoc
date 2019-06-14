import React, {useState} from 'react';
import PropTypes  from 'prop-types'; 
import * as Utility from './utility';

const propTypes = {
  show: PropTypes.bool.isRequired,
  hideCallback: PropTypes.func.isRequired,
  delay: PropTypes.number.isRequired,
  withAnimation: PropTypes.bool.isRequired,
  startAnimation: PropTypes.bool.isRequired,
  modalStyle: PropTypes.object.isRequired,
  backdropStyle: PropTypes.object.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]).isRequired
};

const ModalTemplate = (props) => {
  const {
    show, 
    hideCallback, 
    delay,
    withAnimation,
    startAnimation, 
    className,
    children,
    backdropStyle,
    modalStyle,
  } = props;

  const [marginTop, setMarginTop] = useState(0);
  
  let style= {...backdropStyle};
  style.display = show ? "block" : "none";
  


  let filteredModalStyle 
          = Utility
              .getModalStyle
              (
                modalStyle, 
                withAnimation,
                delay
              );

  // if startAnimation set to true and
  // user scrolls on content.
  // Or when aniamtion starts.
  if(startAnimation){
    filteredModalStyle.marginTop = marginTop;
  }

  return (
    <>
      <div 
        className={"modal-backdrop " + (show ? 'show': '')} 
        style={style} onClick={hideCallback}>
      </div>
      <div 
        className={"modal " + (show ? 'show': '')} 
        style={{display: style.display }} 
      >
        <div 
          className={"modal-dialog " + className }>
          <div 
            className="modal-content " 
            style={filteredModalStyle} 
            onWheel={(e) => Utility.onWheelEventHandler(e, marginTop, setMarginTop)}
          >
            { children }
          </div>
        </div>     
      </div>   
    </>
  )
}

ModalTemplate.propTypes = propTypes;

export default ModalTemplate;
