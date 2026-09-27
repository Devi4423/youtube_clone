import { CgPlayList } from "react-icons/cg";
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setPlayListTitle } from '../reduxStore/playListTitleSlice';

const PlayListCard = ({ item }) => {

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(setPlayListTitle({id:item?.id, title:item?.snippet?.title, channelId:item?.snippet?.channelId}))
  },[dispatch, item])

  if (!item) return;
  // console.log(item);

  const { thumbnails, title, channelTitle } = item?.snippet;
  const { itemCount } = item?.contentDetails;

  return (
    <>
      <div className=" flex gap-3 sm:block sm:gap-0">
        <div className="relative mb-1 w-[150px] aspect-video flex-shrink-0 sm:w-full">
          <img
            className="w-full h-full rounded-md object-cover"
            src={thumbnails.medium.url}
            alt="PlayList Banner"
          />
          <div className=" absolute bottom-2 right-2 flex gap-1 items-center text-white bg-black bg-opacity-65 rounded-md px-2 py-1">
            <p className="text-2xl xl:text-3xl">
              <CgPlayList />
            </p>
            <p className="font-semibold text-sm xl:text-base">{itemCount}</p>
          </div>
        </div>
        <div className="">
          <h6 className='text-[0.70rem] leading-[0.90rem] md:text-xs font-semibold line-clamp-3 mb-0.5'>{title}</h6>
          <p className='text-[0.65rem] md:text-xs text-gray-600'>{channelTitle}. Playlist</p>
        </div>
      </div>
    </>
  );
};

export default PlayListCard;
