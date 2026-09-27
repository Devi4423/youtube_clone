import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { openMenu } from "../reduxStore/menuSlice";
import { useParams, Outlet } from "react-router-dom";
import useFetchChannel from "../customHooks/useFetchChannel";
import ChannelHeader from "../subcomponents/ChannelHeader";
import ChannelNavbar from "../subcomponents/ChannelNavbar";
import MobileChannelDescription from "../responsiveMobileComponents/MobileChannelDescription";

const ChannelPage = () => {
  const [showChannelDescription, setShowChannelDescription] = useState(false);
  const isMenuOpen = useSelector((store) => store.menu.isMenuOpen);
  const dispatch = useDispatch();
  const { id } = useParams();
  const channelInfo = useFetchChannel(id);

  useEffect(() => {
    dispatch(openMenu());
  }, [dispatch]);

  const openChannelDescription = () => {
    setShowChannelDescription(true);
  };

  const closeChannelDescription = () => {
    setShowChannelDescription(false);
  }

  if (!channelInfo) return;
  // console.log(channelInfo);

  const { uploads } = channelInfo?.contentDetails?.relatedPlaylists;

  return (
    <>
      {showChannelDescription ? (
        <MobileChannelDescription channelInfo={channelInfo} closeChannelDescription={closeChannelDescription}/>
      ) : (
        <main className={`absolute top-[45px] bottom-0 right-0 min-w-0 overflow-x-hidden md:top-[45px] lg:top-[60px] ${isMenuOpen?'md:left-[180px] xl:left-[240px]' : 'left-0' } `}>
          <div className={`w-full max-w-[1536px] mx-auto`}>
            <ChannelHeader channelInfo={channelInfo} openChannelDescription={openChannelDescription}/>
            <ChannelNavbar channelId={id} />
            <Outlet context={{ uploads, id }} />
          </div>
        </main>
      )}
    </>
  );
};

export default ChannelPage;
