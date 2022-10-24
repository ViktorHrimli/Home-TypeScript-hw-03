import { FC, MouseEvent } from "react";
import { Card } from "./Api";
import { ImageGalleryItem } from "./ImageGalleryItem";
interface IGalleryProps {
  data: Card[];
  onModal: (evt: MouseEvent<HTMLAnchorElement>) => void;
}

const Gallery: FC<IGalleryProps> = ({ data, onModal }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: " 250px, 250px, 250px, 250px",
        gridGap: "20px",
      }}
    >
      <ul>
        {data.map((item) => {
          return <ImageGalleryItem key={item.id} {...item} onModal={onModal} />;
        })}
      </ul>
    </div>
  );
};

export { Gallery };
