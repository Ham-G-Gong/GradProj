export const ConnectChecker = ({ children, ErrorComponent }) => {
  try {
    return <div>{children}</div>;
  } catch (e) {
    return <ErrorComponent />;
  }
};
