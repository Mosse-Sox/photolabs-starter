import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  const { id, location, imageSource, username, profile } =
    props.sampleDataForPhotoListItem;

  return (
    <article className="photo-list__item" key={id}>
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
    </article>
  );
};

export default PhotoListItem;
