import React from "react";

import "../styles/TopNavigationBar.scss";
import TopicList from "./TopicList";
import FavBadge from "./FavBadge";

const TopNavigation = (props) => {

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
