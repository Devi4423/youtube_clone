import { findNthPrime } from "../utils/helper";
import { useState,useMemo } from 'react';
import Demo2 from '../components/Demo2' 

const Demo1 = () => {

    const [number,setNumber] = useState(0);
    const [count,setCount] = useState(0);
    const [isDarkTheme,setIsDarkTheme]= useState(false);

    //heavy operation
    const prime = useMemo(()=>findNthPrime(number),[number])

    return(
        <div className="absolute top-[60px] left-[18%] flex gap-3">
            <div className={`w-[400px] h-[400px]  border-2 border-gray-500 p-4 m-4 ${isDarkTheme && "bg-gray-900"}`}>
                <button className="bg-green-300 p-2 m-2" onClick={()=>{
                    setIsDarkTheme(!isDarkTheme)
                    console.log(isDarkTheme)}}>Toggle Theme</button>
                <div className={`${isDarkTheme && 'text-white'}`}>Count: {count}</div>
                <button className='bg-yellow-300 p-2 m-4 text-white' onClick={()=>{
                    setCount(c=>c+1) 
                    console.log("Count Rendering")}}>Increment Count</button>
                <input type="number" value={number} onChange={(e)=>setNumber(e.target.value)} className="border-2 border-gray-300 mb-2 p-2"/>
                <p className={`font-bold ${isDarkTheme && 'text-white'}`}>nth Prime: {prime}</p>
                <div className={`${isDarkTheme && 'text-white'}`}>{number}</div>
            </div>
            <Demo2/>
        </div>
    );
}

export default Demo1;