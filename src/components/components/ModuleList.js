export const ModuleList = ({ module_list, now, setNow, setIsClicked }) => {
  return (
    <div
      style={{
        listStyleType: "none",
        backgroundColor: "white",
        boxShadow: "0 4px 5px 0 #00000044",
        position: "absolute",
        width: "100%",
        left: "0",
        border: "1px solid white",
        borderRadius: "5px",
        paddingTop: "10px",
      }}
    >
      {module_list &&
        module_list.map((element, index) => {
          return (
            <p
              onClick={() => {
                setNow(element);
                setIsClicked(false);
              }}
              style={{
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                margin: "0",
                marginBottom: "10px",
                marginLeft: "6px",
                marginRight: "6px",
                borderBottom: "1px solid darkgray",
                fontSize: "18px",
              }}
              key={index}
            >
              {element === now && "Now : "}
              {element}
            </p>
          );
        })}
    </div>
  );
};
