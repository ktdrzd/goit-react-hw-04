import style from "./ImageGallery.module.css";
import { ImageCard } from '../imagecard/ImageCard';

export const ImageGallery = ({ items, onClick }) => {
  return (
    <ul className={style.list}>
      {items.map(item => (
        <li className={style.item} key={item.id} onClick={() => onClick(item)}>
          <ImageCard item={item}/>
        </li>
      ))}
    </ul>
  );
};