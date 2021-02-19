import { useEffect, useState } from "react";

const useCurrentLocation = () => {
  const [city, setCity] = useState<string>("加载中...");

  useEffect(() => {
    const xhr = new XMLHttpRequest();
    xhr.open("get", "http://ip-api.com/json/?lang=zh-CN");
    xhr.onload = () => {
      const { city } = JSON.parse(xhr.responseText);
      setCity(city);
    };
    xhr.onerror = () => {
      setCity("未知");
    };
    xhr.send();
  }, []);

  return [city, setCity];
};

export default useCurrentLocation;
