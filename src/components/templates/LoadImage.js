import { useState } from "react";
import { JetsonImgContainer } from "../components/JetsonImgContainer";

export const LoadImage = ({ img_name }) => {
  /**
   * TODO :: 연결 되었으니 데이터 받아옵시다.
   */
  return (
    <div>
      {img_name && (
        <JetsonImgContainer
          before_process={
            `${process.env.REACT_APP_SERVER_IP}/pre_image/` + img_name
          }
          after_process={
            `${process.env.REACT_APP_SERVER_IP}/post_image/` + img_name
          }
        />
      )}
    </div>
  );
};
