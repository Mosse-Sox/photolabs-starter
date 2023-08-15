import { useReducer } from "react";

// Action types
const ACTIONS = {
  OPEN_MODAL: "OPEN_MODAL",
  CLOSE_MODAL: "CLOSE_MODAL",
};

// Reducer function - returns modal state based on action
const modalReducer = (state, action) => {
  let similarPhotoObjs;
  switch (action.type) {
  case ACTIONS.OPEN_MODAL:
    
    similarPhotoObjs = Object.values(action.similarPhotos);
    if (similarPhotoObjs.length > 6) {
      similarPhotoObjs = similarPhotoObjs.slice(0, 6);
    }

    return {
      clicked: true,
      modalPhotos: { photo: action.photo, similarPhotos: similarPhotoObjs },
    };

  case ACTIONS.CLOSE_MODAL:
    return {
      clicked: false,
      modalPhotos: {},
    };

  default:
    return state;
  }
};

/**
 * useModal is a custom hook that manages the state for the modal in
 * this app. useModal manages two states, clicked: indicating if a photo has been clicked or not, and
 * modalPhotos: the photos that need to be loaded in the modal based on the photo that was clicked.
 * @returns an object {clicked: true/false, modalPhotos: { photo: photoObject, similarPhotos: [array of similar photo objects]},
 * isClicked: function(), unClicked: function()}
 */
const useModal = () => {
  const initialState = {
    clicked: false,
    modalPhotos: {},
  };

  const [state, dispatch] = useReducer(modalReducer, initialState);

  /**
   * This function opens the sidepeek/modal and sets the modalPhotos state
   * object
   * @param {Object} photo photo object - this is the photo that was clicked on (ei. main photo)
   * @param {Array} similarPhotos this is an array of similar photo objects from the photo that was clicked on
   */
  const isClicked = (photo, similarPhotos) => {
    dispatch({
      type: ACTIONS.OPEN_MODAL,
      photo,
      similarPhotos,
    });
  };

  /**
   * this function closes the sidepeek/modal when a user clicks the x button on it
   */
  const unClicked = () => {
    dispatch({
      type: ACTIONS.CLOSE_MODAL,
    });
  };

  return {
    clicked: state.clicked,
    modalPhotos: state.modalPhotos,
    isClicked,
    unClicked,
  };
};

export default useModal;
