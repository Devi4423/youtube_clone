import { IoMdClose } from "react-icons/io";
import useFormatDescription from '../customHooks/useFormatDescription';

const MobileChannelDescription = ({channelInfo,closeChannelDescription}) => {

    const formattedDescription = useFormatDescription(channelInfo);
    // console.log(formattedDescription);

    if(!channelInfo) return;
    // console.log(channelInfo);

    const {title} = channelInfo?.snippet;

    return (
        <div className='absolute top-[47px] px-3 w-full'>
            <div className='flex justify-between items-center mb-2'>
                <h6 className='text-lg font-bold'>{title}</h6>
                <p className='text-xl font-bold cursor-pointer hover:bg-gray-200 p-2 rounded-md' onClick={closeChannelDescription}><IoMdClose/></p>
            </div>
            <p className='text-gray-600 text-xs whitespace-pre-wrap'>{formattedDescription}</p>
        </div>
    )
}

export default MobileChannelDescription;