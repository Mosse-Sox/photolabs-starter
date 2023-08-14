import { React } from "react";
import PhotoList from "../components/PhotoList";
import TopNavigation from "../components/TopNavigationBar";
import useApplicationData from "../hooks/useApplicationData";
import "../styles/HomeRoute.scss";

/**
 * HomeRoute is the homepage component of the app for users
 * @param {Object} props is an object containing global state and functions associated
 * @returns the jsx representation of the homepage
 */
const HomeRoute = (props) => {
  const { photos, topics, getPhotosByTopics, returnToHome } = useApplicationData();

  return (
    <div className="home-route">
      <TopNavigation like={props.like} topics={topics} getPhotosByTopics={getPhotosByTopics} returnToHome={returnToHome}/>
      <PhotoList like={props.like} likePhoto={props.likePhoto} isClicked={props.isClicked} photos={photos}/>
    </div>
  );
};

export default HomeRoute;
