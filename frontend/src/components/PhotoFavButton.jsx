import React from "react";

import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

/**
 * this is the component responsible for rendering the PhotoFavButton component,
 * the button on all the photos
 * @param {*} props - like state object, likePhoto function
 * @returns the jsx represntation of the PhotoFavButton component
 */
const PhotoFavButton = (props) => {
  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <FavIcon like={props.isLiked} likePhoto={() => props.likePhoto(props.photoId)}/>
      </div>
    </div>
  );
};

export default PhotoFavButton;
