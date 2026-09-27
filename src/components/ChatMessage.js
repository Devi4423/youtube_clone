import { FaCircleUser } from "react-icons/fa6";

const ChatMessage = ({name,message}) => {
    
    return(
        <div className="flex gap-2 items-center mb-2 2xl:gap-4 2xl:mb-3">
            <span className="text-2xl 2xl:text-4xl"><FaCircleUser/></span>
            <p className="text-sm font-semibold 2xl:text-2xl">{name}</p>
            <p className="text-gray-700 text-sm 2xl:text-2xl">{message}</p>
        </div>
    )
}

export default ChatMessage;