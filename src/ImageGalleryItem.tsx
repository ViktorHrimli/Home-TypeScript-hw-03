import { FC, MouseEvent } from "react";
import { Card } from "./Api";
interface IPropsGalleryItem extends Card {
  onModal: (evt: MouseEvent<HTMLAnchorElement>) => void;
}

const ImageGalleryItem: FC<IPropsGalleryItem> = ({
  id,
  largeImageURL,
  webformatURL,
  onModal,
}) => {
  return (
    <>
      <li style={{ listStyle: "none" }}>
        <a href={largeImageURL} onClick={onModal}>
          <img
            src={webformatURL}
            style={{ width: "350px", height: "200px" }}
            alt="cat"
          />
        </a>
      </li>
    </>
  );
};

export { ImageGalleryItem };
