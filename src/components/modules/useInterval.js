import { useEffect } from "react";

export const useInterval = (setFunc, getDataFunc) => {
  useEffect(() => {
    const timer = setInterval(async () => {
      await getDataFunc(setFunc);
    }, 2500);
    return () => clearInterval(timer);
  }, []);
};
