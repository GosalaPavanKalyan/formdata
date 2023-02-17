import { useContext } from "react"
import Gc from "./Gc"
let Tr=(props)=>{
    let y=props.data
    let dt=useContext(Gc)
    let edit=(e)=>{
        dt()
        // let e=document.getElementById(props.ind)
        // if  (e.innerHTML=="edit") {
        //     e.innerHTML='save'
        // }
        // else{
        //     e.innerHTML="edit"
        // }
    }
    let edit2=(e)=>{


//          props.setData(x=>{ 
// for(let i=0;i<x.length;i++){
//     if()
// }

//                })
        console.log(e.target.id,e.target.value)
    }
    let dl=()=>{
        props.del(props.ind)
        // localStorage.setItem("list",JSON.stringify(props.arr1))
    }
    return(
        <tr>
            <td>
            <p>{y.name}</p>
            {/* <input id={props.ind} onChange={edit2} placeholder="text"/> */}
            </td>
            <td>{y.branch}</td>
            <td><button onClick={edit} ><i className="fa-solid fa-pen-to-square"></i></button> <button onClick={dl}>delete</button></td>
        </tr>
    )
}
export default Tr