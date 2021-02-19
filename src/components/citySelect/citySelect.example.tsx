import * as React from "react";
import CitySelect from "./citySelect";
import cityList from "../../utils/cityList";
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
          选择城市
        </CitySelect>
      </div>
    </div>
  );
};
export default CitySelectExample;
