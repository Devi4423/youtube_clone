import { NavLink } from "react-router-dom";

const ChannelNavbar = ({ channelId }) => {
  // console.log(channelId);
  return (
    <div className=" w-full flex gap-14 items-center mb-3 py-2 px-3 border-gray-100 border-b-2 bg-white z-40">
      <NavLink
        to={`/channel/${channelId}`}
        end
        className={({isActive})=>`text-sm xl:text-base ${isActive ? 'font-bold text-black border-black border-b-2 py-1':'font-semibold text-gray-500'}`}
      >
        Home
      </NavLink>
      <NavLink
        to={`/channel/${channelId}/videos`}
        end
        className={({isActive})=>`text-sm xl:text-base ${isActive ? 'font-bold text-black border-black border-b-2 py-1':'font-semibold text-gray-500'}`}
      >
        Videos
      </NavLink>
      <NavLink
        to={`/channel/${channelId}/playlist`}
        className={({isActive})=>`text-sm xl:text-base ${isActive ? 'font-bold text-black border-black border-b-2 py-1' : 'font-semibold text-gray-500'}`}
      >
        PlayList
      </NavLink>
      <NavLink
        to={`/channel/${channelId}/Live`}
        className={({isActive})=>`text-sm xl:text-base ${isActive ? 'font-bold text-black border-black border-b-2 py-1' : 'font-semibold text-gray-500'}`}
      >
        Live
      </NavLink>
    </div>
  );
};

export default ChannelNavbar;
