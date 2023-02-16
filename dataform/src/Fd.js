import Table from "./Table";
import {useState ,useRef} from "react";
let Fd=()=>{
    let arr=  JSON.parse(localStorage.getItem("list")) || []
    let name=useRef("")
    let branch=useRef("")



    let [Data,setData]=useState([...arr])
   


    let update=()=>{
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

<button onClick={update}>Add</button>
<Table  x={Data} del={del}/>
</form> 


      
    )
}
export default Fd;






