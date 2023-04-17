export const JetsonImgBox = ({ before_process, after_process }) => {
  return (
    <div>
      <div>
        <a>영상 처리 전</a>
        <img alt="before processing." src={before_process} />
      </div>
      <div>
        <a>영상 처리 후</a>
        <img alt="after processing." src={after_process} />
      </div>
    </div>
  );
};
