import React, { FC, useContext } from "react";
import { useCurrentLocation } from "../../hooks/useCurrentLocation";
import ReactDOM from "react-dom";
import { CitySelectContext } from "./citySelect";

interface ICityPane {
  onClose: () => void;
}

const CityPane: React.FC<ICityPane> = (props) => {
  const { map, onChange } = useContext(CitySelectContext);
  const { onClose } = props;

  const cityList = Object.entries(map).sort((a, b) => {
    return a[0].charCodeAt(0) - b[0].charCodeAt(0);
  });
  const indexList = Object.keys(map).sort();

  console.log("cityList", cityList);
  cityList.map((item) => {
    const [letter, list] = item;
    console.log(letter, list);
  });

  const [currentCity] = useCurrentLocation();

  return ReactDOM.createPortal(
    <div className="yc-citySelect-dialog">
      <header>
        <span className="icon" onClick={onClose}>
          &lt;
        </span>
        <span>选择城市</span>
      </header>

      <div className="yc-citySelect-currentCity">当前城市：{currentCity}</div>

      <div className="yc-citySelect-alphabet">
        <h3>按拼音首字母选择</h3>
        <div className="yc-citySelect-r-info">
          {indexList.map((a) => (
            <a href={`#city-${a}`} key={a} className="yc-citySelect-letter">
              {a}
            </a>
          ))}
        </div>
      </div>

      <div className="yc-citySelect-alphabet-city-area">
        {cityList.map(([letter, list]) => {
          return (
            <div
              key={letter}
              className="yc-citySelect-city-area"
              id={`city-${letter}`}
            >
              <span data-letter={letter} className="yc-citySelect-city-label">
                {letter}
              </span>
              <span className="yc-citySelect-city">
                {list.map((city) => (
                  <span
                    className="yc-citySelect-city-name"
                    key={city}
                    onClick={() => onChange(city)}
                  >
                    {city}
                  </span>
                ))}
              </span>
            </div>
          );
        })}
      </div>
    </div>,
    document.body
  );
};

export default CityPane;
