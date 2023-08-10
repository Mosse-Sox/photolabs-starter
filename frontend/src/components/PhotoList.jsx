import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";
import photos from "../mocks/photos";



const PhotoList = (props) => {
  const photoList = photos.map((photo) => {
    const {id, location, urls, user} = photo;
    const photoObj = {
      location,
      imageSource: urls.regular,
      username: user.name,
      profile: user.profile
    };
    return (<PhotoListItem photoItem={photoObj} key={id} like={props.like} likePhoto={props.likePhoto}/>);
  });


  return (
    <ul className="photo-list">
      {photoList}
    </ul>
  );
};

export default PhotoList;
