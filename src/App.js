import React,{useState} from 'react';
import './App.css';
import AddUsers from './Components/Users/AddUsers';
import UserDetail from './Components/Users/UserDetail';

function App() {
  const [userList , setUserList] = useState([]);

  const addUserHandler = (username , userage , usercollegename) =>{
    setUserList((previosUserList)=>{
        return [...previosUserList, {name:username , age:userage , collegename:usercollegename , id:Math.random().toString() }]
    })
  }

  return (
    <div className="App">
     <AddUsers onAddUser = {addUserHandler} />
    
     <UserDetail user = {userList} />
    </div>
  );
}

export default App;
