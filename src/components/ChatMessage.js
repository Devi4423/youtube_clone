import { FaCircleUser } from "react-icons/fa6";

const ChatMessage = ({name,message}) => {
    
    return(
        <div className="flex gap-2 items-center mb-2">
            <span className="text-2xl"><FaCircleUser/></span>
            <p className="text-sm font-semibold">{name}</p>
            <p className="text-gray-700 text-sm">{message}</p>
        </div>
    )
}

export default ChatMessage;