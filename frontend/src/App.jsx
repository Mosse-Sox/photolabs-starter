import { React } from "react";
import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import useLike from "hooks/useLike";
import useModal from "hooks/useModal";

import "./App.scss";

// Note: Rendering a single component to build components in isolation
const App = () => {
  const { clicked, isClicked, unClicked, modalPhotos } = useModal();
  const { like, toggleLike } = useLike();

  return (
    <div className="App">
      <HomeRoute isClicked={isClicked} like={like} likePhoto={toggleLike}/>
      {clicked && <PhotoDetailsModal unClicked={unClicked} modalPhotos={modalPhotos} like={like} likePhoto={toggleLike}/>}
    </div>
  );
};

export default App;
 