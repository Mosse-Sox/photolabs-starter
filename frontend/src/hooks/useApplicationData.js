import { useState, useEffect } from "react";

const useApplicationData = () => {
  const [photos, setPhotos] = useState([]);
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8001/api/photos").then((res) =>
      res.json().then((data) => setPhotos([...data]))
    );
  }, []);

  useEffect(() => {
    fetch("http://localhost:8001/api/topics").then((res) =>
      res.json().then((data) => setTopics([...data]))
    );
  }, []);

  const getPhotosByTopics = (topicId) => {
    fetch(`http://localhost:8001/api/topics/photos/${topicId}`).then((res) =>
      res.json().then((data) => setPhotos([...data]))
    );
  };

  const returnToHome = () => {
    fetch("http://localhost:8001/api/photos").then((res) =>
      res.json().then((data) => setPhotos([...data]))
    );
  };

  return {
    photos,
    topics,
    getPhotosByTopics,
    returnToHome
  };
};

export default useApplicationData;
