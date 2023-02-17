import Table from "./Table";
import {useState ,useRef} from "react";
import Gc from './Gc'
let Fd=()=>{
    let arr=  JSON.parse(localStorage.getItem("list")) || []
    let name=useRef("")
    let branch=useRef("")
    // let addbtn=document.getElementById("adde")
    // console.log("adde",document.getElementById("adde"))

    // if(addbtn.innerHTML=="Add") addbtn.addEventListener('click',add)


    let [Data,setData]=useState([...arr])

    
    
    let main=()=>{
        let e=document.getElementById("adde")
        // console.log("main",e)
        if(e.innerHTML=="Add") e.addEventListener('click',add)
        else{
            e.addEventListener('click',add)
        }

    }
    let add=()=>{
        if(name.current.value=="" || branch.current.value=="" ){
            
            return alert("Enter valid input")
             
        }
        arr.push({name:name.current.value,branch:branch.current.value})
        localStorage.setItem("list",JSON.stringify(arr))
        console.log(arr)
        let obj={name:name.current.value,branch:branch.current.value}
        setData([...Data,obj])
        name.current.value=""
        branch.current.value=""
       
    }
    let update=()=>{
        
        let e=document.getElementById("adde")
        // console.log("update",e)
        if(e.innerHTML=="Add") e.innerHTML="update"
        else e.innerHTML="Add"
    }
    
    let del=(ind)=>{
        setData(Data.filter((item,index)=>{
            if(index!=ind) {return ({...item}
                )}
        }))
        arr.splice(ind,1)
        
        // Data.map((item,i)=>{
        //     arr.push(item)
        // })
        localStorage.setItem("list",JSON.stringify(arr))
    }

    
    let Submit=(event)=>{
        event.preventDefault()
    }
    
    return(
<form onSubmit={Submit}>
<input type="text"  ref={name}/> Name
<input type="text" ref={branch}/>Branch 
<button id="adde" onClick={main}>Add</button>
<Gc.Provider value={update}>
<Table  x={Data} setData={setData} del={del} />
</Gc.Provider>
</form> 


      
    )
    
}
export default Fd;






