import { useEffect, useState } from "react";

export const useCurrentLocation = () => {
  const [currentCity, setCurrentCity] = useState<string>("加载中...");

  useEffect(() => {
    const xhr = new XMLHttpRequest();
    xhr.open("get", "http://ip-api.com/json/?lang=zh-CN");
    xhr.onload = () => {
      const { city } = JSON.parse(xhr.responseText);
      setCurrentCity(city);
    };
    xhr.onerror = () => {
      setCurrentCity("未知");
    };
    xhr.send();
  }, []);

  return [currentCity, setCurrentCity];
};
