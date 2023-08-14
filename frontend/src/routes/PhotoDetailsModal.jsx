import { React } from "react";

import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import PhotoList from "../components/PhotoList";
import PhotoListItem from "../components/PhotoListItem";

/**
 * PhotoDetailsModal is the component for the sidepeek when a user clicks on a photo and is
 * only rendered when a photo has been clicked on.
 * @param {Object} props - modalPhotos from state, unClicked function, like state object, likePhoto function
 * @returns the jsx representation of the PhotoDetailsModal component
 */
const PhotoDetailsModal = (props) => {
  const { photo, similarPhotos } = props.modalPhotos;
  const modal = true;

  return (
    <div className="photo-details-modal">
      <button
        className="photo-details-modal__close-button"
        onClick={props.unClicked}
      >
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <ul className="main-photo">
        <PhotoListItem
          photoItem={photo}
          like={props.like}
          likePhoto={props.likePhoto}
          mainPhoto={true}
          modal={modal}
        />
      </ul>

      <hr/>
      
      <div>
        <div className="photo-details-modal__header">
          <span>Similar Photos</span>
        </div>
        <PhotoList
          photos={similarPhotos}
          like={props.like}
          likePhoto={props.likePhoto}
          modal={modal}
          isClicked={() => false}
        />
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
