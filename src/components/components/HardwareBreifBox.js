import { PercentageComponent } from "./PercentageComponent";

export const HardwareBreifBox = ({ hardware_performance }) => {
  return (
    <div>
      <p>Model Performance</p>
      <PercentageComponent title="CPU" value={hardware_performance.CPU} />
      <PercentageComponent title="GPU" value={hardware_performance.GPU} />
      <p>Inference Time {hardware_performance.InferenceTime}</p>
    </div>
  );
};
