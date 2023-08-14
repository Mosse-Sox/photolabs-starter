import { useReducer } from "react";

// action types
const actionTypes = {
  ADD_LIKE: "ADD_LIKE",
  REMOVE_LIKE: "REMOVE_LIKE",
};

// Reducer function - returns like state based on actions
const likeReducer = (state, action) => {
  let newState;
  switch (action.type) {
  case actionTypes.ADD_LIKE:
    return {
      ...state,
      [action.photoId]: true,
    };
  case actionTypes.REMOVE_LIKE:
    newState = { ...state };
    delete newState[action.photoId];
    return newState;
  default:
    return state;
  }
};

/**
 * this is the custom hook for likes in this app, the state of likes is managed here
 * @returns an object { like: {id: true, id: true, etc}, toggleLike: function() }
 */
const useLike = () => {
  // note: like is initialized as an empty object
  const [like, dispatch] = useReducer(likeReducer, {});

  /**
   * this function toggles the state of a like by photo id, manages dispatching for adding
   * and removing a like from the like state object
   * @param {Integer} photoId the id of the photo that is liked or unliked
   */
  const toggleLike = (photoId) => {
    if (like[photoId]) {
      dispatch({ type: actionTypes.REMOVE_LIKE, photoId });
    } else {
      dispatch({ type: actionTypes.ADD_LIKE, photoId });
    }
  };

  return {
    like,
    toggleLike
  };
};

export default useLike;
