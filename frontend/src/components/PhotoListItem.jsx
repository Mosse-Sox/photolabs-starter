import React from "react";
import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  const { location, urls, user, id } = props.photoItem;
  return (
    <li
      className={`${
        !props.modal
          ? "photo-list__item"
          : props.mainPhoto
            ? "photo-details-modal__image"
            : "photo-list__item"
      }`}
      onClick={props.isClicked}
    >
      <PhotoFavButton
        isLiked={props.like[id] || false}
        likePhoto={props.likePhoto}
        photoId={id}
      />
      <img
        src={urls.regular}
        className={`${
          !props.modal
            ? "photo-list__image"
            : props.mainPhoto
              ? "photo-details-modal__image"
              : "photo-details-modal__images"
        }`}
        id={`${props.mainPhoto ? "main-photo" : ""}`}
      ></img>

      <div className="photo-list__user-details">
        <img src={user.profile} className="photo-list__user-profile"></img>
        <div className="photo-list__user-info">
          <span>{user.name}</span>
          <span className="photo-list__user-location">
            {location.city}, {location.country}
          </span>
        </div>
      </div>
    </li>
  );
};

export default PhotoListItem;
