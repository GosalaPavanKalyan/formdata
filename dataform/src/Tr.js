let Tr=(props)=>{
    let y=props.data
    console.log(props)
    let edit=(e1)=>{
        let e=document.getElementById(props.ind)
        if  (e.innerHTML=="edit") {
            e.innerHTML='save'
        }
        else{
            e.innerHTML="edit"
        }
    }
    let dl=()=>{
        props.del(props.ind)
    }
    return(
        <tr>
            <td>{y.name}</td>
            <td>{y.branch}</td>
            <td><button id={props.ind} onClick={edit}> edit</button> <button onClick={dl}>delete</button></td>
        </tr>
    )
}
export default Tr