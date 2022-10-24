import { FC, useEffect, useState, MouseEvent } from "react";
import { SerchBar } from "./Serchbar";
import { Api, Card } from "./Api";
import { Gallery } from "./Gallery";
import { Modal } from "./Modal";
import { Button } from "./Button";

const App: FC<{}> = () => {
  const [query, setQuery] = useState<string>("");
  const [card, setCard] = useState<Card[]>([]);
  const [page, setPage] = useState<number>(1);
  const [modalPage, setModalPage] = useState<string>("");
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [isButtonLoad, setIsButtonLoad] = useState<boolean>(false);

  useEffect(() => {
    if (query === "") return;
    Api(query, page).then(({ hits }) => {
      setCard((prev) => prev.concat(hits));
    });
    setIsButtonLoad(true);
  }, [query, page]);

  const handleSetQuery = (serchQuery: string): void => {
    setQuery(serchQuery);
  };

  const loadMoreBtnClick = (): void => {
    setPage((prev) => prev + 1);
  };

  const handleClickCard = (evt: MouseEvent<HTMLAnchorElement>): void => {
    evt.preventDefault();
    setModalPage(evt.currentTarget.href);
    setIsOpenModal(!isOpenModal);
  };

  const toggleModal = (): void => {
    setIsOpenModal(!isOpenModal);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <SerchBar onFunc={handleSetQuery} />
      <Gallery data={card} onModal={handleClickCard} />
      {isButtonLoad && <Button onClick={loadMoreBtnClick} />}
      {isOpenModal && <Modal onToggle={toggleModal}>{modalPage}</Modal>}
    </div>
  );
};

export default App;
