import { useState, useRef,useEffect } from 'react';

const Demo2 = () => {
    
    let x=0;

    const [value,setValue] = useState(0);

    const refValue = useRef(0);
    console.log(refValue);

    console.log("Rendering");

    const i = useRef(null);
    useEffect(()=>{
        i.current = setInterval(()=>console.log("Youtube Clone app",Math.random()),1000);

        return()=>{
            clearInterval(i.current);
        }

    },[])

    return(
        <div className="border-2 p-4 m-4 w-[400px] h-[400px] border-gray-500">
            <div className="flex gap-2 items-center">
                <button className="bg-green-400 text-white p-2 m-2" onClick={()=>{
                    x = x + 1;
                    console.log("X = ",x)
                }}>Increment X</button>
                <p>Let x={x}</p>
            </div>
            <div className="flex gap-2 items-center">
                <button className="bg-green-400 text-white p-2 m-2" onClick={()=>{
                    setValue((value) => value + 1)
                    console.log("Y = ",value)
                }}>Increment Y</button>
                <p>State = {value}</p>
            </div>
            <div className="flex gap-2 items-center">
                <button className="bg-green-400 text-white p-2 m-2" onClick={()=>{
                    refValue.current = refValue.current + 1
                    console.log("ref = ",refValue.current)
                }}>Increment Ref</button>
                <p>Ref = {refValue.current}</p>
            </div>
            <button className='bg-red-700 p-2 m-2 text-white' onClick={()=>{
                clearInterval(i.current);
                console.log(i.current);
            }}>Stop Printing</button>
        </div>
    )
}

export default Demo2;