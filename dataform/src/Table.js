import Tr from "./Tr"
function Table(props){
    let arr=props.x
    // console.log("Data=",arr)
    return(
        <div>
        <table border="1">
            <thead>
            <tr>
                <th>Name</th>
                <th>Branch</th>
                <th>edit/delete</th>
                </tr>
            </thead>
            <tbody>
                {arr.map((item,index,arr1)=><Tr data={item} key={index} ind={index} del={props.del} arr1={arr1}/>)}
                {/* <td>tr</td> */}
            </tbody>
           </table>
           </div>
    )
}
export default Table