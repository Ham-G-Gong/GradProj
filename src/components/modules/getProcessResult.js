import axios from "axios";

export const getProcessResult = async (setImg, setResult) => {
  try {
    const { result, img_name } = await axios
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
    setResult({
      accuracy: result[0],
      inference_time: result[1],
    });
  } catch (e) {
    console.log(e.message);
    window.location.href = "/error";
  }
};
