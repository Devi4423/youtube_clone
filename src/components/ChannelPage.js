import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { openMenu } from "../reduxStore/menuSlice";
import { useParams, Outlet } from "react-router-dom";
import useFetchChannel from "../customHooks/useFetchChannel";
import ChannelHeader from "../subcomponents/ChannelHeader";
import ChannelNavbar from "../subcomponents/ChannelNavbar";

const ChannelPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const channelInfo = useFetchChannel(id);

  useEffect(() => {
    dispatch(openMenu());
  }, [dispatch]);

  if (!channelInfo) return;
  // console.log(channelInfo);

  const {uploads} = channelInfo?.contentDetails?.relatedPlaylists;

  return (
      <div className="absolute top-[60px] left-[16%] px-10 w-[calc(100%-16%)]">
        <ChannelHeader channelInfo={channelInfo} />
        <ChannelNavbar channelId={id}/>
        <Outlet context={{uploads,id}}/>
      </div>
  );
};

export default ChannelPage;
