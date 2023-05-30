export const CustomWhiteText = ({ style, children }) => {
  return (
    <p
      style={{
        color: "#FFF",
        fontSize: "23px",
        ...style,
      }}
    >
      {children}
    </p>
  );
};
