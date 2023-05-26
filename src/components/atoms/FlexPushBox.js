export const FlexPushBox = ({ children, style }) => {
  return (
    <div
      style={{
        ...style,
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      {children}
    </div>
  );
};
