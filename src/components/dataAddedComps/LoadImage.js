import { useState } from "react";
import { JetsonImgBox } from "../components/JetsonImgBox";

export const LoadImage = () => {
  /**
   * TODO :: 연결 되었으니 데이터 받아옵시다.
   */
  const [before_process, setBeforeProcess] = useState(
    "https://t1.daumcdn.net/cfile/tistory/99BB433359E8C2BF32"
  );
  const [after_process, setAfterProcess] = useState(
    "https://t1.daumcdn.net/cfile/tistory/99D3583359E8C8511E"
  );
  return (
    <div>
      <JetsonImgBox
        before_process={before_process}
        after_process={after_process}
      />
    </div>
  );
};
