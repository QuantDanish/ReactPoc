import React from 'react';
import ReactRating from 'react-rating';

const SVGIcon = (props) => {
  return (<svg className={props.className} pointerEvents="none">
    <use xlinkHref={props.href} />
  </svg>);
}

const Rating = () => {
  return (
    <ReactRating/>
  );
}


  
export default Rating;
