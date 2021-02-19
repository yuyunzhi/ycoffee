import * as React from "react";
import CitySelect from "./citySelect";
import cityList from "../../utils/cityList";
import Button from "../Button";
const CitySelectExample: React.FC = () => {
  return (
    <div>
      <div>
        <h2>第一个例子</h2>
        <CitySelect
          dataSource={cityList}
          onChange={(cityName) => {
            console.log(cityName);
          }}
        >
          <Button> 选择城市 </Button>
        </CitySelect>
      </div>
    </div>
  );
};
export default CitySelectExample;
