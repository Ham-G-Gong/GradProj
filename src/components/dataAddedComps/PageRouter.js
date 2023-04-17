import { JetsonImgBox } from "../components/JetsonImgBox";
import { PageRouterFrame } from "../components/PageRouterFrame";

export const PageRouter = ({ where }) => {
  /**
   * data 불러오고 어느 페이지에서 호출했는지로 구분해서 라우팅
   * TODO:: infocomponent 구현 HOME 따로 Hardware 따로
   *
   */
  return (
    <PageRouterFrame
      connect_state={true}
      ConnectSuccessComponent={() => {
        return <JetsonImgBox />;
      }}
    />
  );
};
