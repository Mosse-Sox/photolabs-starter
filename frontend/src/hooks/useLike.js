import { useReducer } from "react";

// Action types
const actionTypes = {
  ADD_FAVORITE: "ADD_FAVORITE",
  REMOVE_FAVORITE: "REMOVE_FAVORITE",
};

// Reducer function
const likeReducer = (state, action) => {
  let newState;
  switch (action.type) {
  case actionTypes.ADD_FAVORITE:
    return {
      ...state,
      [action.photoId]: true,
    };
  case actionTypes.REMOVE_FAVORITE:
    newState = { ...state };
    delete newState[action.photoId];
    return newState;
  default:
    return state;
  }
};

const useLike = () => {
  const [like, dispatch] = useReducer(likeReducer, {});

  const toggleLike = (photoId) => {
    if (like[photoId]) {
      dispatch({ type: actionTypes.REMOVE_FAVORITE, photoId });
    } else {
      dispatch({ type: actionTypes.ADD_FAVORITE, photoId });
    }
  };

  return {
    like,
    toggleLike
  };
};

export default useLike;
