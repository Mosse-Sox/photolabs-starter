import { React, useState } from "react";
import PhotoList from "../components/PhotoList";
import TopNavigation from "../components/TopNavigationBar";

import "../styles/HomeRoute.scss";

const HomeRoute = (props) => {
  const [like, setLike] = useState({});

  const likePhoto = (photoId) => {
    setLike((prevLikes) => ({
      ...prevLikes,
      [photoId]: !prevLikes[photoId] || false,
    }));
  };

  return (
    <div className="home-route">
      <TopNavigation like={like} />
      <PhotoList like={like} likePhoto={likePhoto} isClicked={props.isClicked}/>
    </div>
  );
};

export default HomeRoute;
