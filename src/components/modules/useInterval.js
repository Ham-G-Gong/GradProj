import { useEffect } from "react";

export const useInterval = (setFunc, getDataFunc) => {
  useEffect(() => {
    let a = 1;
    const timer = setInterval(() => {
      const data = getDataFunc((a += 1));
      setFunc(data);
    }, 2000);
    return () => clearInterval(timer);
  }, []);
};
