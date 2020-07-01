import React from 'react';
import Icon from './components/Icon/icon'

function App() {
    const onClick=()=>{
        console.log(123)
    }
  return (
    <div className="App">
      <hr/>
        <div style={{display:'flex',flexDirection:'row'}}>
            <Icon icon="spinner" spin theme={'success'} size="3x" style={{marginRight:'8px'}}/>
            <Icon icon="ad" theme={'danger'} size="3x" style={{marginRight:'8px'}}/>
            <Icon icon="inbox" theme={'info'} size="3x" style={{marginRight:'8px'}}/>
            <Icon icon="baby" theme={'info'} size="3x" style={{marginRight:'8px'}}/>
        </div>
      <hr/>
    </div>
  );
}

export default App;
