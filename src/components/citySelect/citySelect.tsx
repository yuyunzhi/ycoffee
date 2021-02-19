import React, { Dispatch, SetStateAction, useContext, useState } from "react";
import ReactDOM from "react-dom";
import "./citySelect.scss";
import pinyin from "tiny-pinyin";
import useCurrentLocation from "../../hooks/useCurrentLocation";

interface Props {
  dataSource: string[];
  onChange: (p1: string) => void;
}

interface Context {
  map: { [key: string]: string[] };
  onChange: (p1: string) => void;
  setDialogVisible: Dispatch<SetStateAction<boolean>>;
}

const CitySelectContext = React.createContext<Context>({
  map: {},
  onChange: (p1: string) => {},
  setDialogVisible: () => {},
});

const CitySelect: React.FC<Props> = (props) => {
  const [dialogVisible, setDialogVisible] = useState(true);
  const map: Context["map"] = {};

  props.dataSource.map((city) => {
    const py = pinyin.convertToPinyin(city);
    const index = py[0];
    map[index] = map[index] || [];
    map[index].push(city);
  });

  const onClick = () => {
    setDialogVisible(true);
  };

  return (
    <CitySelectContext.Provider
      value={{ map, onChange: props.onChange, setDialogVisible }}
    >
      <div onClick={onClick}>{props.children}</div>
      {dialogVisible && <Dialog onClose={() => setDialogVisible(false)} />}
    </CitySelectContext.Provider>
  );
};

const Dialog: React.FC<{ onClose: () => void }> = (props) => {
  const { map, onChange } = useContext(CitySelectContext);
  const cityList = Object.entries(map).sort(
    (a, b) => a[0].charCodeAt(0) - b[0].charCodeAt(0)
  );
  const indexList = Object.keys(map).sort();
  const onClick = (city: string) => {
    onChange(city);
  };

  const [city] = useCurrentLocation();

  return ReactDOM.createPortal(
    <div className="yc-city-select-dialog">
      <header>
        <span className="icon" onClick={props.onClose}>
          &lt;
        </span>
        <span>选择城市</span>
      </header>
      <div className="yc-city-select-currentCity">当前城市：{city}</div>
      <h2>全部城市</h2>
      <ol className="yc-city-select-index">
        {indexList.map((a) => (
          <li key={a}>{a}</li>
        ))}
      </ol>
      <div className="cityList">所有城市</div>
      {cityList.map(([letter, list]) => {
        return (
          <div key={letter} className="yc-city-select-citySection">
            <h4 data-letter={letter}>{letter}</h4>
            {list.map((city) => (
              <div
                className="yc-city-select-cityName"
                key={city}
                onClick={() => onClick(city)}
              >
                {city}
              </div>
            ))}
          </div>
        );
      })}
    </div>,
    document.body
  );
};

export default CitySelect;
