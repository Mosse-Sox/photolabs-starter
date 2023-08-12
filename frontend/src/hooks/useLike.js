import { useState } from "react";

const useLike = () => {
  const [like, setLike] = useState({});

  const toggleLike = (photoId) => {
    setLike((prevLikes) => ({
      ...prevLikes,
      [photoId]: !prevLikes[photoId] || false,
    }));
  };

  return {
    like,
    toggleLike
  };
};

export default useLike;