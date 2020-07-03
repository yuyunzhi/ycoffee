import React from 'react';
import Menu from "./components/Menu";
import MenuItem from "./components/Menu/menuItem";
import SubMenu from "./components/Menu/subMenu";
function App() {
    const onSelect = (index:number|string) =>{
        console.log(index)
    }

  return (
    <div className="App">
        <div style={{display:'flex',flexDirection:'row'}}>
            <Menu onSelect={onSelect} defaultIndex="2" mode="vertical" defaultOpenSubMenus={["3"]}>
                <MenuItem>
                    cool link0
                </MenuItem>
                <MenuItem>
                    cool link1
                </MenuItem>
                <MenuItem>
                    cool link2
                </MenuItem>
                <SubMenu title={"你好"}>
                    <MenuItem>
                        cool link3
                    </MenuItem>
                    <MenuItem>
                        cool link4
                    </MenuItem>
                    <MenuItem>
                        cool link5
                    </MenuItem>
                </SubMenu>

            </Menu>
        </div>
      <hr/>
    </div>
  );
}

export default App;
