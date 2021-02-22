import { useState } from "react";
import useDebounce from "./useDebounce";

const useToggle = (initialValue: boolean) => {
  const [expanded, setExpanded] = useState(initialValue);

  const expand = () => {
    setExpanded(true);
  };
  const collapse = () => {
    setExpanded(false);
  };
  return {
    value: expanded,
    expand,
    collapse,
  };
};

export default useToggle;
