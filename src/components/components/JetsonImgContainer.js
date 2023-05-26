import { FlexCenterBox } from "../atoms/FlexCenterBox";
import { JetsonImgBox } from "./JetsonImgBox";

export const JetsonImgContainer = ({ before_process, after_process }) => {
  return (
    <FlexCenterBox>
      <JetsonImgBox
        explain="Before Processing"
        alt="before processing"
        src={before_process}
      />
      <div style={{ width: "10%" }} />
      <JetsonImgBox
        explain="After Processing"
        alt="after processing"
        src={after_process}
      />
    </FlexCenterBox>
  );
};
