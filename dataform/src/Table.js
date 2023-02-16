import Tr from "./Tr"
function Table(props){
    let arr=props.x
    // console.log(props)
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
                {arr.map((item,index)=><Tr data={item} key={index} ind={index} del={props.del}/>)}
                {/* <td>tr</td> */}
            </tbody>
           </table>
           </div>
    )
}
export default Table