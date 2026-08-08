import { CgPlayList } from "react-icons/cg";

const PlayListCard = ({ item }) => {
  if (!item) return;

  const { thumbnails } = item?.snippet;
  const { itemCount } = item?.contentDetails;

  return (
    <div className="shadow-lg rounded-md relative">
      <img
        className="w-full rounded-md object-cover "
        src={thumbnails.medium.url}
        alt="PlayList Banner"
      />
      <div className=" absolute bottom-2 right-2 flex gap-1 text-white bg-black bg-opacity-65 rounded-md px-2 py-1">
        <p><CgPlayList className="text-3xl" /></p>
        <p className="font-medium">{itemCount}</p>
      </div>
    </div>
  );
};

export default PlayListCard;
