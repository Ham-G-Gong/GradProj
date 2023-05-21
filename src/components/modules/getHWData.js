import axios from "axios";

export const getHWData = async (setFunc) => {
  try {
    await axios
      .get(`${process.env.REACT_APP_SERVER_IP}/hardware`)
      .then((response) => {
        if (response.status !== 200) {
          throw new Error(
            JSON.stringify({
              status: response.status,
              message: "getHWData error",
            })
          );
        }
        console.log(response.data);
        setFunc(response.data);
      });
  } catch (e) {
    console.log(JSON.parse(e.message).status);
    window.location.href = "/error";
  }
};
