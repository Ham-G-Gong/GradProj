export const ConnectState = ({ connect_state, device_info, InfoComponent }) => {
  if (connect_state) {
    return (
      <div>
        연결 굿
        <InfoComponent />
      </div>
    );
  } else
    return (
      <div>
        <div>연결 실패에요</div>
      </div>
    );
};
