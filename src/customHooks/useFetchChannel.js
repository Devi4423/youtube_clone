import { Youtube_Api_key } from "../utils/constants";
import { useState, useEffect } from "react";

const useFetchChannel = (channelId) => {
  const [channelInfo, setChannelInfo] = useState(null);

  const getChannel = async () => {
    try{
        const res = await fetch(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics%2CbrandingSettings&id=${channelId}&key=${Youtube_Api_key}`);
        if(!res.ok){
          console.log("Youtube API Error",res.status,res.statusText);
        }
        const json = await res.json();
        setChannelInfo(json.items?.[0]);
    }
    catch(error){
      console.log("Networking or Parsing Error", error);
    }
  };

  useEffect(() => {
    getChannel();
  }, [channelId]);

  return channelInfo;
};

export default useFetchChannel;
