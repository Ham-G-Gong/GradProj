import axios from "axios";

export const getProcessResult = async (setImg) => {
  try {
    const { img_name } = await axios
      .get(`${process.env.REACT_APP_SERVER_IP}/ai_module/result`)
      .then((response) => {
        if (response.status !== 200) {
          throw new Error(
            JSON.stringify({
              status: response.status,
              message: "getHWData error",
            })
          );
        }
        return response.data;
      });
    setImg(img_name);
  } catch (e) {
    console.log(e.message);
    window.location.href = "/error";
  }
};
