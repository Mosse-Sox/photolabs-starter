import { useState } from "react";

const useModal = () => {
  const [clicked, setClicked] = useState(false);
  const [modalPhotos, setModalPhotos] = useState({});

  const isClicked = (photo, similarPhotos) => {
    setClicked(true);
    const similarPhotoObjs = Object.values(similarPhotos);
    setModalPhotos({ photo, similarPhotos: similarPhotoObjs });
  };

  const unClicked = () => {
    setClicked(false);
  };

  return {
    clicked,
    modalPhotos,
    isClicked,
    unClicked
  };
};

export default useModal;
