import { useState } from "react";
import { BigProgressBar } from "../components/BigProgressBar";

export const LoadHardwareInfo = () => {
  /**
   * TODO :: 연결 되었으니 데이터 받아옵시다.
   */
  const [cpu, setCPU] = useState(65);

  const [gpu, setGPU] = useState(55);
  return (
    <div>
      <BigProgressBar percentage={cpu} />
    </div>
  );
};
