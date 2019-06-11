import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  index: PropTypes.number,
  title: PropTypes.string,
  minWidth: PropTypes.string
}

const defaultProps = {
  children: 'Dummy Child',
  title: 'Title',
  index: 0,
  minWidth: '48%'
}

const DemoCard = ({children, index, title, minWidth}) => {
  return (
    <div className="card p-2 m-2" style={{width: minWidth}}>
      <div className="h4">
        {index}. {title}
      </div>
      <hr/>
      <div className="card-body">
        {children}
      </div>
    </div>
  );
}


DemoCard.propTypes = propTypes;
DemoCard.defaultProps = defaultProps;


export default DemoCard;
