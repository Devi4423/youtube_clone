import { Youtube_Api_key } from "../utils/constants";
import { useState, useEffect } from "react";

const useFetchChannel = (channelId) => {
  const [channelInfo, setChannelInfo] = useState(null);

  const getChannel = async () => {
    const data = await fetch(
      `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=${Youtube_Api_key}`,
    );
    const json = await data.json();
    setChannelInfo(json.items[0]);
  };

  useEffect(() => {
    getChannel();
  }, [channelId]);

  return channelInfo;
};

export default useFetchChannel;
