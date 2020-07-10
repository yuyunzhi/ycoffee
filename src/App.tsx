import React from 'react';
import Progress from "./components/Progress/progress";

function App() {

  return (
    <div className="App">
        <Progress percent={40}  styles={{width:'50%'}}/>
        <hr/>
        <Progress percent={20} strokeHeight={20} styles={{width:'50%'}}/>
        <hr/>
        <Progress percent={100} strokeHeight={30} textPosition={'out'} styles={{width:'50%'}}/>
        <hr/>
        <Progress percent={5} strokeHeight={30} textPosition={'out'} theme='danger' styles={{width:'50%'}} />
    </div>
  );
}

export default App;
