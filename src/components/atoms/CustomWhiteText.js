export const CustomWhiteText = ({ style, children }) => {
  return (
    <p
      style={{
        color: "#FFF",
        fontSize: "18px",
        ...style,
      }}
    >
      {children}
    </p>
  );
};
