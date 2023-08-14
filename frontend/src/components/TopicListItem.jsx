import React from "react";

import "../styles/TopicListItem.scss";

/**
 * this is the component responsible for rendering a single
 * TopicListItem, the topics in the navbar - onClick they call
 * a function to render only the photos tagged with that topic
 * @param {Object} props - the topic title to be rendered
 * @returns the jsx representation of the TopicListItem component
 */
const TopicListItem = (props) => {
  return (
    <div className="topic-list__item">
      <span onClick={props.getPhotosByTopics}>{props.topicTitle}</span>
    </div>
  );
};

export default TopicListItem;
