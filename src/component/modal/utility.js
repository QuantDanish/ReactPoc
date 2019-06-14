const SCROLL_FACTOR = -20;
const BOTTOM_MARGIN = 0.05;
const getPageHeight = () => {
  // Most suitable value is 'documentElement.clientHeight'
  // It gives the height of page without scrolling.
  return Math.min(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.documentElement.clientHeight
  );
};

const getPageWidth = () => {
  return Math.max(
    document.body.scrollWidth,
    document.documentElement.scrollWidth,
    document.body.offsetWidth,
    document.documentElement.offsetWidth,
    document.documentElement.clientWidth
  );
}

const getElementBoundary = element => {
  if(typeof(element) !== 'undefined' &&
    element !== null) {
      return element.getBoundingClientRect();
    }
  return null;
}

const canScroll = (event) => {
  const modal = event.currentTarget;
  const modalBoundary = getElementBoundary(modal);
  const pageHeight = getPageHeight();

  const isOutsideWindow 
        = modalBoundary.bottom > pageHeight || 
          modalBoundary.top < 0 ;
  const scrollingUp = event.deltaY < 0;

  console.log("scrolling up ? " ,scrollingUp, " scroll value" , event.deltaY);
  console.log(modalBoundary);
  console.log("page Height ", pageHeight);
  const canScrollUp = scrollingUp && modalBoundary.top < 0;
  const canScrollDown = !scrollingUp && modalBoundary.bottom > pageHeight;
  
  return isOutsideWindow &&
        (
          canScrollUp ||
          canScrollDown
        );
} 

const getNewMargin = (event, currentMargin) => {
  const modal = event.currentTarget;
  const modalBoundary = getElementBoundary(modal);
  const pageHeight = getPageHeight();
  const scrollingUp = event.deltaY < 0;
  const increment = (SCROLL_FACTOR * event.deltaY);
  let offset = currentMargin + increment;

  if(scrollingUp) {
    return Math.min(0 ,offset);
  }
  else {
    const maxTopMargin = 
      (
        modalBoundary.height + 
        (BOTTOM_MARGIN * pageHeight)
      ) - pageHeight;
    
    return Math.max(-maxTopMargin, offset);
  }
}

export const onWheelEventHandler = (e, marginTop, setMarginTop) => {
  e.preventDefault();
  
  if(canScroll(e)) {
    
    console.log("old margin ", marginTop);
    const newMargin = getNewMargin(e,marginTop);
    console.log("new margin ", newMargin);
    setMarginTop(newMargin);
  }

  return;
}

export const getModalStyle = (style, withAnimation, delay) => {
  let modalStyle = {};
  for (const key in style) {
    if (style.hasOwnProperty(key) && !key.match(/margin/i)) {
      modalStyle[key] = style[key];
      
    }
  }

  // add transition property
  modalStyle['marginTop'] = '-100%';
  modalStyle['transition'] = `margin-top ${delay}ms ease-out`;

  if(!withAnimation) {
    modalStyle.marginTop = '0';
  }

  return modalStyle;
}
