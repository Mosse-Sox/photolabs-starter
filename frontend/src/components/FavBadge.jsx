import React from "react";
import FavIcon from "./FavIcon";

import "../styles/FavBadge.scss";

/**
 * this is the component responsibly for rendering the FavIcon component in the TopNav component
 * @param {props} - in this case a boolean value represnting if a like exists or not
 * @returns the jsx representation of the FavBadge component
 */
const FavBadge = ({ isFavPhotoExist }) => {
  return (
    <div className="fav-badge">
      <FavIcon displayAlert={!!isFavPhotoExist} like={isFavPhotoExist}/>
    </div>
  );
};

export default FavBadge;
