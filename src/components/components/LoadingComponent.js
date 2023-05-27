import { CustomWhiteText } from "../atoms/CustomWhiteText";

export const LoadingComponents = ({ condition, children }) => {
  return condition ? (
    <div>{children}</div>
  ) : (
    <CustomWhiteText>Loading...</CustomWhiteText>
  );
};
