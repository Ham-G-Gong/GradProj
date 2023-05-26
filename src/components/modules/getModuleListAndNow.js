import axios from "axios";

export const getModuleListAndNow = async (setList, setNow) => {
  try {
    const { data: list_data } = await axios
      .get(`${process.env.REACT_APP_SERVER_IP}/ai_module/list`)
      .then((response) => {
        console.log("getModuleListAndNow.modulelist: ", response.data);
        if (response.status !== 200) {
          throw new Error({
            status: response.status,
            message: "getModuleList error",
          });
        }
        return response;
      });
    const { data: now_data } = await axios
      .get(`${process.env.REACT_APP_SERVER_IP}/ai_module/now`)
      .then((response) => {
        console.log("getModuleListAndNow.nowmodule: ", response.data);
        if (response.status !== 200) {
          throw new Error({
            status: response.status,
            message: "getModuleList error",
          });
        }
        return response;
      });
    setList(list_data);
    setNow(now_data);
  } catch (e) {
    // window.location.href = "/error";
    console.log(e.message);
  }
};
