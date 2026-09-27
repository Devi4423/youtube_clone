import { useState, useEffect } from "react";
import { Youtube_Api_key } from "../utils/constants";

const usePlayList = (channelId) => {
  const [playList, setPlayList] = useState();

  const getPlayList = async () => {
    try {
      const response = await fetch(
        `https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=${channelId}&maxResults=50&key=${Youtube_Api_key}`,
      );
      if(!response.ok){
        console.log("Youtube API Error", response.status,response.statusText);
      }
      const data = await response.json();
      // console.log(data);
      setPlayList(data);
    } 
    catch (error) {
      console.log("Network PArsing Error",error);
    }
  };

  useEffect(() => {
    getPlayList();
  }, []);

  return playList;
};

export default usePlayList;
