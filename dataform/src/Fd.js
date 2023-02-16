import Table from "./Table";
import {useState ,useRef} from "react";
let Fd=()=>{
    let [Data,setData]=useState([])
    let name=useRef("")
    let branch=useRef("")


    let update=()=>{
        let obj={name:name.current.value,branch:branch.current.value}
        setData([...Data,obj])
        name.current.value=""
        branch.current.value=""
       
    }
    let del=(ind)=>{
        setData(Data.filter((item,index)=>{
            if(index!=ind) {return {...item}}
        }))
    }
    // let setName=(e)=>{
    //     setObj({...Obj,Name:e.target.value})
        
        
    // }
    // let setBranch=(e)=>{
    //     setObj({...Obj,Branch:e.target.value})
       
    // }
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






