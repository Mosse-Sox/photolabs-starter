import {React, useState} from "react";
import HomeRoute from "routes/HomeRoute";


import "./App.scss";

// Note: Rendering a single component to build components in isolation
const App = () => {
  const [like, setLike] = useState(false);

  const likePhoto = () => {
    if (like) {
      setLike(false);
    } else {
      setLike(true);
    }
    console.log(like);
  };

  return (
    <div className="App">
      <HomeRoute like={like} likePhoto={likePhoto}/>
    </div>
  );
};

export default App;
