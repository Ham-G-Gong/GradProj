export const JetsonImgBox = ({ explain, alt, src }) => {
  return (
    <div>
      <p>{explain}</p>
      <img alt={alt} src={src} />
    </div>
  );
};
