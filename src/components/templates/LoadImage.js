import { useState } from "react";
import { JetsonImgContainer } from "../components/JetsonImgContainer";
import { CustomWhiteText } from "../atoms/CustomWhiteText";
import { AiFillExclamationCircle } from "react-icons/ai";

export const LoadImage = ({ img_name }) => {
  const label = [
    { color: "black", color_name: "검정색", description: "background (배경)" },
    {
      color: "blue",
      color_name: "파란색",
      description: "debris/mud/rock flow (잔해/진흙/암석류)",
    },
    { color: "green", color_name: "초록색", description: "person (사람)" },
    { color: "red", color_name: "빨간색", description: "avalanche (눈사태)" },
    { color: "aqua", color_name: "청록색", description: "fire/flare (화재)" },
    {
      color: "#FF00FF",
      color_name: "자홍색",
      description: "pyroclastic flow (화쇄류)",
    },
    {
      color: "#FFFF00",
      color_name: "노란색",
      description: "building undamaged (온전한 건물)",
    },
    {
      color: "#F00000",
      color_name: "어두운 빨간색",
      description: "flood/water/river/sea (홍수/물/강/바다)",
    },
    {
      color: "#00F000",
      color_name: "어두운 초록색",
      description: "road/railway/bridge (도로/철도/교량)",
    },
    {
      color: "#0000F0",
      color_name: "어두운 파란색",
      description: "building damaged (온전하지 않은 건물)",
    },
    {
      color: "#F0F000",
      color_name: "어두운 노란색",
      description: "ice jam flow (하천 결빙류)",
    },
    {
      color: "#F000F0",
      color_name: "어두운 자홍색",
      description: "vehicle (차량)",
    },
    {
      color: "#00F0F0",
      color_name: "어두운 청록색",
      description: "cracks/fissure/subsidence (균열/틈/침하)",
    },
    { color: "", color_name: "흰색", description: "lava flow(용암류)" },
  ];
  const [isOver, setIsOver] = useState(false);
  return (
    <div>
      {img_name && (
        <JetsonImgContainer
          before_process={
            `${process.env.REACT_APP_SERVER_IP}/pre_image/` + img_name
          }
          after_process={
            `${process.env.REACT_APP_SERVER_IP}/post_image/` + img_name
          }
        />
      )}
      <div
        style={{
          display: "flex",
          justifyContent: "right",
          alignItems: "center",
          position: "relative",
        }}
        onMouseOver={() => setIsOver(true)}
        onMouseOut={() => setIsOver(false)}
      >
        <AiFillExclamationCircle
          style={{ marginRight: "1%" }}
          color="white"
          size="20"
        />
        <CustomWhiteText style={{ fontSize: "16px" }}>
          See description about the image after processing.
        </CustomWhiteText>
        <table
          style={{
            backgroundColor: "#FFFFFF",
            position: "absolute",
            top: "50px",
            display: isOver ? "block" : "none",
          }}
        >
          <tbody>
            {label.map(({ color, color_name, description, index }) => (
              <tr key={index}>
                <td>{color_name}</td>
                <td style={{ backgroundColor: color }}>-</td>
                <td>{description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
