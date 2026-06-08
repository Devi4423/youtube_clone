import ChatMessage from './ChatMessage';
import { useEffect,useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { addMessages } from '../reduxStore/chatSlice';
import { makeRandomString, generateRandomName } from '../utils/helper';

const LiveChat = () => {

    const [textMessage,setTextMessage] = useState("");

    const messages = useSelector((store)=>store.chat.messages);

    const dispatch = useDispatch();

    useEffect(()=>{
        const interval = setInterval(()=>{
            console.log("API Polling");
            dispatch(addMessages({ "name": generateRandomName(), "message": makeRandomString(16)}));
        },2000)

        return ()=>{
            clearInterval(interval);
        }
    },[])

    const handleSubmit = () => {
        if(textMessage.trim() === "") return;
        dispatch(addMessages({"name":"You", "message": textMessage}));
        setTextMessage("");
    }

    if(!messages) return 

    return(
        <>
            <div className="border border-gray-400 pt-4 py-4 px-2 w-full h-[480px] rounded-md bg-slate-50 shadow-sm overflow-y-scroll flex flex-col-reverse">
                {messages.map((message,index)=>(
                    <ChatMessage key={index} name={message.name} message={message.message}/>
                ))}
            </div> 
            <div>
                <form className="w-full border-gray-300 mt-2 rounded-md border-2 p-2 flex gap-2 " onSubmit={(e)=>{
                    e.preventDefault();
                    handleSubmit()
                }}>
                    <input className="flex-1 border-[1px] border-gray-300 p-2 focus:outline-none" value={textMessage} onChange={(e)=>setTextMessage(e.target.value)}/>
                    <button className='text-green-600 font-semibold px-2 py-1' type='submit'>Send</button>
                </form>
            </div>
        </>
    )
}

export default LiveChat;