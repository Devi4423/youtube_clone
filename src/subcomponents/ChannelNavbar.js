import { NavLink } from "react-router-dom";

const ChannelNavbar = ({ channelId }) => {
  // console.log(channelId);
  return (
    <div className="flex gap-20 items-center mb-3">
      <NavLink
        to={`/channel/${channelId}`}
        className="text-lg text-gray-500 font-semibold active:font-bold active:text-black active:underline"
      >
        Home
      </NavLink>
      <NavLink
        to={`/channel/${channelId}/playlist`}
        className="text-lg text-gray-500 font-semibold active:font-bold active:text-black active:underline"
      >
        PlayList
      </NavLink>
      <NavLink
        to={`/channel/${channelId}/Live`}
        className="text-lg text-gray-500 font-semibold active:font-bold active:text-black active:underline"
      >
        Live
      </NavLink>
    </div>
  );
};

export default ChannelNavbar;
