export const FlexBox = ({ children, style }) => {
  return (
    <div
      style={{
        ...style,
        display: "flex",
      }}
    >
      {children}
    </div>
  );
};
