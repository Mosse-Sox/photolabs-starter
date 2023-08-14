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

  return {
    photos,
    topics
  };
};

export default useApplicationData;
