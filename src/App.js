import React from 'react';
import DemoCard from './component/DemoCard/DemoCard';
import DemoModal from './demoComponent/DemoModal';
import DemoLoader from './demoComponent/DemoLoader';


function App() {

  return (
    <div className="App container">
      <div className="d-flex justify-content-around">
        <div className="h1">React Components</div>
      </div>
      <hr/>
      <div className="d-flex flex-wrap justify-content-between">
        <DemoCard index={1} title="Modal">
          <DemoModal/>
        </DemoCard>
        <DemoCard index={2} title="Loader">
          <DemoLoader />
        </DemoCard>
      </div>
    </div>
  );
}

export default App;
