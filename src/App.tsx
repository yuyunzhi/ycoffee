import React, {ChangeEvent} from 'react';

function App() {
    const onChange = ( e : ChangeEvent<HTMLInputElement>)=>{
        console.log('2222',e.target.value);
    }
  return (
    <div className="App">
      <hr/>
        <div style={{display:'flex',flexDirection:'row'}}>
        </div>
      <hr/>
    </div>
  );
}

export default App;
