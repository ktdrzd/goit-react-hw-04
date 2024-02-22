// import style from "./ImageGallery.module.css";
import { ImageCard } from '../imagecard/ImageCard';

export const ImageGallery = ({ items, onClick }) => {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id} onClick={() => onClick(item)}>
          <ImageCard item={item}/>
        </li>
      ))}
    </ul>
  );
};

// export default ImageGallery;