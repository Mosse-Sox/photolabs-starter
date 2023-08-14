import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";


const TopicList = (props) => {
  const topicList = props.topics.map((topic) => {
    return (<TopicListItem topicTitle={topic.title} key={topic.id}/>);
  });

  return (
    <div className="top-nav-bar__topic-list">
      {topicList}
    </div>
  );
};

export default TopicList;
