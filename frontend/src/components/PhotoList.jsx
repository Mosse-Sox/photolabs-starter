import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

/**
 * this is the component responsible for rendering the list of
 * PhotoListItem components, the list of all the
 *  photos displayed on the homepage/in topic groups/similar photos in modals
 * @param {*} props - array of photo objects from state, like state object, likePhoto function,
 * isClicked function, modal (boolean value from PhotoDetailsModal indicating this render is for similar photos in
 * a sidepeek/modal)
 * @returns the jsx representation of the PhotoList component
 */
const PhotoList = (props) => {
  const photoList = props.photos.map((photo) => {
    // eslint-disable-next-line camelcase
    const { id, location, urls, user, similar_photos } = photo;
    const photoObj = {
      location,
      urls: { regular: urls.regular, full: urls.full },
      user: {
        name: user.name,
        profile: user.profile,
      },
      id,
    };

    return (
      <PhotoListItem
        photoItem={photoObj}
        key={id}
        like={props.like}
        likePhoto={props.likePhoto}
        isClicked={() => props.isClicked(photoObj, similar_photos)}
        modal={props.modal}
      />
    );
  });

  return <ul className={!props.modal ? "photo-list" : "similar-photos"}>{photoList}</ul>;
};

export default PhotoList;
