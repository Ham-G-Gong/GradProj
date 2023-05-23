export const CustomWhiteText = ({ style, children }) => {
  return (
    <text style={{ color: "#FFF", fontSize: "18px", ...style }}>
      {children}
    </text>
  );
};
