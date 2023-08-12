import { React, useState } from "react";
import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";

import "./App.scss";

// Note: Rendering a single component to build components in isolation
const App = () => {
  const [clicked, setClicked] = useState(false);

  const isClicked = (photoUrl, similarPhotos) => {
    setClicked(true);
    console.log(photoUrl, similarPhotos);
  };

  const unClicked = () => {
    setClicked(false);
  };

  return (
    <div className="App">
      <HomeRoute isClicked={isClicked} />
      {clicked && <PhotoDetailsModal unClicked={unClicked} />}
    </div>
  );
};

export default App;
