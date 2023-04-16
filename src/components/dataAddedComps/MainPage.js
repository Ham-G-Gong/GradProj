import { ConnectState } from "../components/ConnectState";

export const MainPage = ({ where }) => {
  /**
   * data 불러오고 어느 페이지에서 호출했는지로 구분해서 라우팅
   * TODO:: infocomponent 구현 HOME 따로 Hardware 따로
   *
   */
  return (
    <ConnectState
      connect_state={false}
      InfoComponent={() => {
        return <div>얌마 도완득</div>;
      }}
    />
  );
};
