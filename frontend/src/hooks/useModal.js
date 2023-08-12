import { useReducer } from "react";

// Action types
const ACTIONS = {
  OPEN_MODAL: "OPEN_MODAL",
  CLOSE_MODAL: "CLOSE_MODAL",
};

// Reducer function
const modalReducer = (state, action) => {
  let similarPhotoObjs;
  switch (action.type) {
  case ACTIONS.OPEN_MODAL:
    similarPhotoObjs = Object.values(action.similarPhotos);
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

const useModal = () => {
  const initialState = {
    clicked: false,
    modalPhotos: {},
  };

  const [state, dispatch] = useReducer(modalReducer, initialState);

  const isClicked = (photo, similarPhotos) => {
    dispatch({
      type: ACTIONS.OPEN_MODAL,
      photo,
      similarPhotos,
    });
  };

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
