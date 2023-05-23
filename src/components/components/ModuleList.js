export const ModuleList = ({ module_list, now, setNow, setIsClicked }) => {
  return (
    <>
      {module_list &&
        module_list.map((element, index) => {
          return (
            <button
              onClick={() => {
                setNow(element);
                setIsClicked(false);
              }}
              key={index}
            >
              {element === now && "now module:\n"}
              {element}
            </button>
          );
        })}
    </>
  );
};
