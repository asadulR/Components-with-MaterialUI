import * as React from 'react';
import AccorditationComponent from './Components/AccorditationComponent';
import ButtonGrou from './Components/ButtonGroup';
import CardComponents from './Components/CardComponents';
import TabDesign from './Components/TabDesign';


function App() {
  return (
    <div>
      <ButtonGrou></ButtonGrou>
      <AccorditationComponent />
      <CardComponents />
      <TabDesign />
    </div>
  );
}

export default App;
