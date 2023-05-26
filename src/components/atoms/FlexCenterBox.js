export const FlexCenterBox = ({ children, style }) => {
  return (
    <div
      style={{
        ...style,
        display: "flex",
        justifyContent: "center",
      }}
    >
      {children}
    </div>
  );
};
