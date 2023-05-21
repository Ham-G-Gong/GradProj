import { useEffect, useState } from "react";
import { PercentProgressBar } from "../components/PercentProgressBar";
import { getHWData } from "../modules/getHWData";
import { useInterval } from "../modules/useInterval";
import { TemperProgressBar } from "../components/TemperProgressBar";
import { HorizonBox } from "../atoms/HorizonBox";

export const LoadHardwareInfo = () => {
  const [hardware_performance, setHardwarePerformance] = useState();
  useEffect(() => {
    getHWData(setHardwarePerformance);
  }, []);
  // 2초 간격으로 데이터 받아오려고 합니다.
  useInterval(setHardwarePerformance, getHWData);
  if (!!hardware_performance)
    return (
      <div>
        <div>
          <p>Hardware Status</p>
        </div>
        <HorizonBox>
          {hardware_performance.CPU.map((element, index) => {
            return (
              <PercentProgressBar
                key={index}
                title={`CPU ${index}`}
                percentage={parseInt(element)}
              />
            );
          })}
        </HorizonBox>
        <HorizonBox>
          <PercentProgressBar
            title={"GPU"}
            percentage={parseInt(hardware_performance.GPU)}
          />
          <PercentProgressBar
            title={`Memory Status \n[${hardware_performance.MEM[0]}/${hardware_performance.MEM[1]}] MB`}
            percentage={(
              (parseInt(hardware_performance.MEM[0]) /
                parseInt(hardware_performance.MEM[1])) *
              100
            ).toFixed(0)}
          />
          <PercentProgressBar
            title={`Swap Memory Status \n[${hardware_performance.S_MEM[0]}/${hardware_performance.S_MEM[1]}] MB`}
            percentage={(
              (parseInt(hardware_performance.S_MEM[0]) /
                parseInt(hardware_performance.S_MEM[1])) *
              100
            ).toFixed(0)}
          />
          <PercentProgressBar
            title={`Storage \n[${hardware_performance.DISK[0]}/${hardware_performance.DISK[1]}] Byte`}
            percentage={parseInt(hardware_performance.DISK[2])}
          />
        </HorizonBox>
        <div>
          <p>Hardware Temperature</p>
        </div>
        <HorizonBox>
          <TemperProgressBar
            title={"CPU temperature"}
            temperature={parseInt(hardware_performance.CPU_T)}
          />
          <TemperProgressBar
            title={"GPU temperature"}
            temperature={parseInt(hardware_performance.GPU_T)}
          />
          <TemperProgressBar
            title={"Thermo temperature"}
            temperature={parseInt(hardware_performance.Therm_T)}
          />
        </HorizonBox>
        <HorizonBox>
          <TemperProgressBar
            title={"PLL temperature"}
            temperature={parseInt(hardware_performance.PLL_T)}
          />
          <TemperProgressBar
            title={"PMIC temperature"}
            temperature={parseInt(hardware_performance.PMIC_T)}
          />
          <TemperProgressBar
            title={"AO temperature"}
            temperature={parseInt(hardware_performance.AO_T)}
          />
        </HorizonBox>
      </div>
    );
  else return <div />;
};
