import React from "react";

import "../styles/TopNavigationBar.scss";
import TopicList from "./TopicList";
import FavBadge from "./FavBadge";

/**
 * this is the component responsible for rendering the navbar at the top
 * of the page, it contains the logo, topics and like notification
 * @param {*} props - topics array from state, like object from state
 * @returns returns the jsx representation of the TopNavigation component
 */
const TopNavigation = (props) => {

  // check if the like object is populated with at least one photoId
  let likedPhotoExists = false;
  for (const photoId in props.like) {
    if (props.like[photoId]) {
      likedPhotoExists = true;
      break;
    }
  }

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo" onClick={props.returnToHome}>PhotoLabs</span>
      <div className="top-nav-bar__topic-groups">
        <TopicList topics={props.topics} getPhotosByTopics={props.getPhotosByTopics}/>
        <FavBadge isFavPhotoExist={likedPhotoExists}/>
      </div>
    </div>
  );
};

export default TopNavigation;
