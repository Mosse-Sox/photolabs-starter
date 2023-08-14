import { useState, useEffect } from "react";

/**
 * useApplicationData is a custom hook that manages the photos and topics state in the app
 * @returns an object {photos: [array of photos from api], topics: [array of topics from api],
 * getPhotosByTopics: function(), returnToHome: function()};
 */
const useApplicationData = () => {
  const [photos, setPhotos] = useState([]);
  const [topics, setTopics] = useState([]);

  // setting initial photos
  useEffect(() => {
    fetch("http://localhost:8001/api/photos").then((res) =>
      res.json().then((data) => setPhotos([...data]))
    );
  }, []);

  // setting initial topics
  useEffect(() => {
    fetch("http://localhost:8001/api/topics").then((res) =>
      res.json().then((data) => setTopics([...data]))
    );
  }, []);

  /**
   * this function is used when a user clicks on a topic tab, loads photos with that topic tagged only
   * @param {topicId} topicId is the id of the topic associated with the tab clicked on by the user
   */
  const getPhotosByTopics = (topicId) => {
    fetch(`http://localhost:8001/api/topics/photos/${topicId}`).then((res) =>
      res.json().then((data) => setPhotos([...data]))
    );
  };

  /**
   * this function takes a user back to all photos regardless of topic tags when they click on the
   * photolabs logo in the navbar
   */
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
