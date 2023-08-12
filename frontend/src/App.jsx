import { React, useState } from "react";
import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import useLike from "hooks/useLike";

import "./App.scss";

// Note: Rendering a single component to build components in isolation
const App = () => {
  const [clicked, setClicked] = useState(false);
  const [modalPhotos, setModalPhotos] = useState({});
  const { like, toggleLike } = useLike();


  const isClicked = (photo, similarPhotos) => {
    setClicked(true);
    const similarPhotoObjs = Object.values(similarPhotos);
    setModalPhotos({photo, similarPhotos: similarPhotoObjs});
  };

  const unClicked = () => {
    setClicked(false);
  };

  return (
    <div className="App">
      <HomeRoute isClicked={isClicked} like={like} likePhoto={toggleLike}/>
      {clicked && <PhotoDetailsModal unClicked={unClicked} modalPhotos={modalPhotos} like={like} likePhoto={toggleLike}/>}
    </div>
  );
};

export default App;
