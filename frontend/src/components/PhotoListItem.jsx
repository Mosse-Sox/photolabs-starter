import React from "react";
import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";

/**
 * this is the component responsible for rendering a single photo,
 * this is used in PhotoList or in PhotoDetailModal for rendering the main/clicked on photo
 * @param {Object} props - photoObject, like state object, likePhoto function,
 * modal (boolean indiciating this render is for modals), mainPhoto (a boolean indicating this is the main/clicked on photo
 * in the modal)
 * @returns the jsx representation of the PhotoListItem component
 */
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
      
    >
      <PhotoFavButton
        isLiked={props.like[id] || false}
        likePhoto={props.likePhoto}
        photoId={id}
        modal={props.modal}
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
        onClick={props.isClicked}
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
