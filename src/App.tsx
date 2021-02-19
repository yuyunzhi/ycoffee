import React from "react";
import Button from "./components/Button/index";
import CitySelect from "./components/CitySelect";
import cityList from "./utils/cityList";

function App() {
  return (
    <div className="App">
      <Button>按钮</Button>
      <CitySelect
        dataSource={cityList}
        onChange={(cityName) => {
          console.log(cityName);
        }}
      >
        <Button> 选择城市 </Button>
      </CitySelect>
    </div>
  );
}

export default App;
