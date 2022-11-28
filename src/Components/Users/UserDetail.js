import React from "react";
import Card from "../UI/Card";
import './UserDetail.css'


const UserDetail = (props) =>{
return(
    <>
    <Card>
        <h3>RECORDS</h3>
    <ul>{props.user.map((users)=>
    (
        
       <li key = {users.id}>
        {users.name} ({users.age} years old) {users.collegename}
        </li>
    
        ))
        }
        
        </ul>
        </Card>
    </>
)
}

export default UserDetail;