import { React } from "react";
import PhotoList from "../components/PhotoList";
import TopNavigation from "../components/TopNavigationBar";
import useApplicationData from "../hooks/useApplicationData";
import "../styles/HomeRoute.scss";

const HomeRoute = (props) => {
  const { photos, topics } = useApplicationData();
  console.log(photos);

  return (
    <div className="home-route">
      <TopNavigation like={props.like} topics={topics}/>
      <PhotoList like={props.like} likePhoto={props.likePhoto} isClicked={props.isClicked} photos={photos}/>
    </div>
  );
};

export default HomeRoute;
