import React from 'react';
import PhotoList from "../components/PhotoList";
import TopNavigation from "../components/TopNavigationBar";

import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {
  return (
    <div className="home-route">
      <TopNavigation like={props.like} likePhoto={props.likePhoto}/>
      <PhotoList like={props.like} likePhoto={props.likePhoto}/>
    </div>
  );
};

export default HomeRoute;
