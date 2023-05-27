import { useEffect } from "react";

export const useInterval = (getDataFunc) => {
  useEffect(() => {
    const timer = setInterval(async () => {
      await getDataFunc();
    }, 2500);
    return () => clearInterval(timer);
  }, []);
};
