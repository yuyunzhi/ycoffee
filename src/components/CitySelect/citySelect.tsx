import React, {
  Dispatch,
  SetStateAction,
  useState,
  useEffect,
  useCallback,
} from "react";
import "./_style.scss";
import pinyin from "tiny-pinyin";
import CityPane from "./cityPane";

interface Props {
  dataSource: string[];
  onChange: (cityName: string) => void;
}

interface Context {
  map: { [key: string]: string[] };
  onChange: (p1: string) => void;
  setDialogVisible: Dispatch<SetStateAction<boolean>>;
}

export const CitySelectContext = React.createContext<Context>({
  map: {},
  onChange: (cityName: string) => {},
  setDialogVisible: () => {},
});

const CitySelect: React.FC<Props> = (props) => {
  const { dataSource, onChange, children } = props;
  const [dialogVisible, setDialogVisible] = useState(false);
  const map: Context["map"] = {};

  useEffect(() => {
    dataSource.map((city) => {
      const pyIndex = pinyin.convertToPinyin(city)[0];
      map[pyIndex] = map[pyIndex] || [];
      map[pyIndex].push(city);
    });
  }, [dataSource, map]);

  const onClick = useCallback(() => {
    setDialogVisible(true);
  }, []);

  return (
    <CitySelectContext.Provider value={{ map, onChange, setDialogVisible }}>
      <div onClick={onClick}>{children}</div>
      {dialogVisible && <CityPane onClose={() => setDialogVisible(false)} />}
    </CitySelectContext.Provider>
  );
};
export default CitySelect;
