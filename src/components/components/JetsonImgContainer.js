import { HorizonBox } from "../atoms/HorizonBox";
import { JetsonImgBox } from "./JetsonImgBox";

export const JetsonImgContainer = ({ before_process, after_process }) => {
  return (
    <HorizonBox>
      <JetsonImgBox
        explain="영상 처리 전"
        alt="before processing"
        src={before_process}
      />
      <JetsonImgBox
        explain="영상 처리 후"
        alt="after processing"
        src={after_process}
      />
    </HorizonBox>
  );
};
