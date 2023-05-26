import { CustomWhiteText } from "../atoms/CustomWhiteText";
import { BsDot } from "react-icons/bs";

export const PercentageComponent = ({ title, value }) => {
  return (
    <div>
      <CustomWhiteText>
        <BsDot />
        {title} : <strong>{value}</strong> %
      </CustomWhiteText>
    </div>
  );
};
