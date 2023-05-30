import { CustomWhiteText } from "../atoms/CustomWhiteText";
import { FlexCenterBox } from "../atoms/FlexCenterBox";
import { TemperProgressBar } from "./TemperProgressBar";

export const TemperatureBox = ({ hardware_performance }) => {
  return (
    <div>
      <br />
      <CustomWhiteText>Hardware Temperature</CustomWhiteText>
      <div style={{ margin: "auto", width: "70%" }}>
        <FlexCenterBox>
          <TemperProgressBar
            title={"CPU temperature"}
            temperature={parseInt(hardware_performance?.CPU_T)}
          />
          <TemperProgressBar
            title={"GPU temperature"}
            temperature={parseInt(hardware_performance?.GPU_T)}
          />
          <TemperProgressBar
            title={"Thermo temperature"}
            temperature={parseInt(hardware_performance?.Therm_T)}
          />
        </FlexCenterBox>
        <FlexCenterBox>
          <TemperProgressBar
            title={"PLL temperature"}
            temperature={parseInt(hardware_performance?.PLL_T)}
          />
          <TemperProgressBar
            title={"PMIC temperature"}
            temperature={parseInt(hardware_performance?.PMIC_T)}
          />
          <TemperProgressBar
            title={"AO temperature"}
            temperature={parseInt(hardware_performance?.AO_T)}
          />
        </FlexCenterBox>
      </div>
    </div>
  );
};
