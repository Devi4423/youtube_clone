import { useState, useEffect } from "react";
import { Youtube_Api_key } from "../utils/constants";

const usePlayList = (channelId) => {
  const [playList, setPlayList] = useState();

  const getPlayList = async () => {
    try {
      const res = await fetch(
        `https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=${channelId}&maxResults=50&key=${Youtube_Api_key}`,
      );
      const data = await res.json();
    //   console.log(data);
      setPlayList(data);
    } 
    catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPlayList();
  }, []);

  return playList;
};

export default usePlayList;
