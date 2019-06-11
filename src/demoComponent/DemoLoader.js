import React, {useState} from 'react';
import Loader from '../component/Loader/Loader';

const DemoLoader = () => {
  // creating state.
  const [isLoading, setIsLoading] = useState(true);

  return (
      <div className="d-flex justify-content-between">
        <button 
          onClick={() => setIsLoading(true)}
          className={"btn btn-outline-primary mx-3 " + (isLoading ? 'disabled' : '')}
            >
            Start 
        </button>
        <Loader isLoading={isLoading}>
          <div className="h4">Loading finished.</div>
        </Loader>
        <button 
          onClick={() => setIsLoading(false)}
          className={"btn btn-outline-primary mx-3 " + (!isLoading ? 'disabled' : '')}>
            Finish 
        </button>
      </div>
  );
};

export default DemoLoader;
