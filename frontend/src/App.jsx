import { React } from "react";
import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import useLike from "hooks/useLike";
import useModal from "hooks/useModal";

import "./App.scss";

const App = () => {
  const { clicked, isClicked, unClicked, modalPhotos } = useModal();
  const { like, likePhoto } = useLike();

  return (
    <div className="App">
      <HomeRoute isClicked={isClicked} like={like} likePhoto={likePhoto} />
      {clicked && (
        <PhotoDetailsModal
          unClicked={unClicked}
          modalPhotos={modalPhotos}
          like={like}
          likePhoto={likePhoto}
        />
      )}
    </div>
  );
};

export default App;
