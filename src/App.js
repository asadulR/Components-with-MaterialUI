import * as React from 'react';
import AccorditationComponent from './Components/AccorditationComponent';
import ButtonGrou from './Components/ButtonGroup';
import CardComponents from './Components/CardComponents';
import ProgressBar from './Components/ProgressBar';
import TabDesign from './Components/TabDesign';


function App() {
  return (
    <div>
      <ButtonGrou></ButtonGrou>
      <AccorditationComponent />
      <CardComponents />
      <TabDesign />
      <ProgressBar />
    </div>
  );
}

export default App;
