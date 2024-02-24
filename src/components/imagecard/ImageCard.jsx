// import style from "./ImageCard.module.css";

export const ImageCard = ({ item: { urls, alt_description } }) => {
  return (
    <div>
      <img src={urls.small} alt={alt_description} width="400" height="400"/>
    </div>
  );
};
// export default ImageCard;