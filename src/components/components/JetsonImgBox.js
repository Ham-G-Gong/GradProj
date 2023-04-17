export const JetsonImgBox = ({ explain, alt, src }) => {
  return (
    <div>
      <a>{explain}</a>
      <img alt={alt} src={src} />
    </div>
  );
};
