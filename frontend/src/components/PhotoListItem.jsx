import React from "react";
import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  const { location, imageSource, username, profile, id } = props.photoItem;

  return (
    <li className="photo-list__item" onClick={props.isClicked}>
      <PhotoFavButton isLiked={props.like[id] || false} likePhoto={props.likePhoto} photoId={id}/>
      <img src={imageSource} className="photo-list__image"></img>
      <div className="photo-list__user-details">
        <img src={profile} className="photo-list__user-profile"></img>
        <div className="photo-list__user-info">
          <span>{username}</span>
          <span className="photo-list__user-location">
            {location.city}, {location.country}
          </span>
        </div>
      </div>
    </li>
  );
};

export default PhotoListItem;
