import { CustomWhiteText } from "../atoms/CustomWhiteText";

export const PercentageComponent = ({ title, value }) => {
  return (
    <div>
      <CustomWhiteText>
        {title} : {value} %
      </CustomWhiteText>
    </div>
  );
};
