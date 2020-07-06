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
            <Menu onSelect={onSelect} defaultName="c"  defaultOpenSubMenus={["sub"]} mode="vertical">
                <MenuItem name="a">
                    cool link0
                </MenuItem>
                <MenuItem name="b">
                    cool link1
                </MenuItem>
                <MenuItem name="c">
                    cool link2
                </MenuItem>
                <SubMenu name="sub" title={"你好"} >
                    <MenuItem   name="d">
                        cool link3
                    </MenuItem>
                    <MenuItem  name="e">
                        cool link4
                    </MenuItem>
                    <MenuItem  name="f">
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
