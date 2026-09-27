import useFormatDescription from "../customHooks/useFormatDescription";
import { useState } from 'react';
import { IoMdClose } from "react-icons/io";

const MobileDescription = ({videoInfo,closeDescription}) => {

    const [isShowMore,setIsShowMore] = useState(false);

    const formattedDescription = useFormatDescription(videoInfo);
    console.log(formattedDescription.slice(0,20));

    if(!videoInfo) return;
    // console.log(videoInfo);

    const {title, description, tags} = videoInfo?.snippet;
    const {viewCount, likeCount} = videoInfo?.statistics;

    const limitedTags = tags[0].split(',').slice(0,3);
    
    return(
        <div className="p-2">
            <div className='flex justify-between items-center mb-2'>
                <h4 className="text-lg font-semibold">Description</h4>
                <button className="text-xl font-bold hover:bg-gray-100" onClick={()=>closeDescription()}><IoMdClose/></button>
            </div>
            <h6 className="text-sm font-semibold mb-1">{title}</h6>
            <div className="flex flex-wrap gap-1 mb-2">
                {limitedTags.map((tag,index)=>(
                    <p key={index} className='text-xs bg-orange-950 bg-opacity-20 px-2 py-1 rounded-md brightness-50'># {tag}</p>
                ))}
            </div>
            <div className="bg-orange-950 bg-opacity-5 brightness-50 rounded-md p-2">
                <p className="text-xs  whitespace-pre-wrap mb-2 overflow-x-auto">{isShowMore?formattedDescription:description.slice(0,170)}</p>
                <button className="bg-transparent border border-gray-100 rounded-full w-full py-1 text-xs font-semibold" onClick={()=>setIsShowMore(!isShowMore)}>{isShowMore ? 'Read Less' : 'Read More'}</button>
            </div>
        </div>
    )
}
export default MobileDescription;