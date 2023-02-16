import { useState } from "react"
function Greeting()
{
    let [Data,setData]=useState({c:0})
    let inc=()=>{setData({...Data,c:Data.c+1})}
    let dec=()=>{setData({...Data,c:Data.c-1})}
    return(
        <div>
            <button onClick={inc}> increment</button>
            <span>{Data.c}</span>
            <button onClick={dec}>Decrement</button>
        </div>
    )
}
export default Greeting;