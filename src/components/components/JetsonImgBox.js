import { CustomWhiteText } from "../atoms/CustomWhiteText";

export const JetsonImgBox = ({ explain, alt, src }) => {
  return (
    <div style={{ width: "40%" }}>
      <CustomWhiteText style={{ textAlign: "center" }}>
        {explain}
      </CustomWhiteText>
      <img style={{ width: "100%" }} alt={alt} src={src} />
    </div>
  );
};
