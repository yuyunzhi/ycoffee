import React from 'react';
import Menu from "./components/Menu";
import MenuItem from "./components/Menu/menuItem";
function App() {
    const onSelect = (index:number|string) =>{
        console.log(index)
    }
  return (
    <div className="App">
        <div style={{display:'flex',flexDirection:'row'}}>
            <Menu onSelect={onSelect} defaultIndex="2" mode="vertical">
                <MenuItem index="0">
                    cool link1
                </MenuItem>
                <MenuItem index="1" disabled>
                    cool link2
                </MenuItem>
                <MenuItem index="2">
                    cool link3
                </MenuItem>
                <MenuItem index="3">
                    cool link4
                </MenuItem>
            </Menu>
        </div>
      <hr/>
    </div>
  );
}

export default App;
