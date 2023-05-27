import axios from "axios";

export const getModuleListAndNow = async (setList, setNow) => {
  try {
    const { list, now } = await axios
      .get(`${process.env.REACT_APP_SERVER_IP}/ai_module/list`)
      .then((response) => {
        console.log("getModuleListAndNow.modulelist: ", response.data);
        if (response.status !== 200) {
          throw new Error({
            status: response.status,
            message: "getModuleList error",
          });
        }
        return response.data;
      });
    setList(list);
    setNow(now);
  } catch (e) {
    // window.location.href = "/error";
    console.log(e.message);
  }
};
