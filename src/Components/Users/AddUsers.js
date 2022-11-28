import React,{useState , useRef} from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import Error from "../UI/Error";
import './AddUsers.css';

const AddUsers = (props) =>{

  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const collegeNameRef = useRef();


  // const [name , setName] = useState('');
  // const [age , setAge] = useState('');
  const [error, setError] = useState();


   const submitHandler = (event) =>{
        event.preventDefault();
        // console.log(nameInputRef.current.value)

         const enteredName = nameInputRef.current.value;
         const enteredAge = ageInputRef.current.value;
         const enteredCollegeName = collegeNameRef.current.value;

        if(enteredName.trim().length === 0 || enteredAge.trim().length === 0 || enteredCollegeName.trim().length === 0){
          setError({
            title:"Invalid input",
            message:"Please enter a valid name and age"
          })
          return;
        }
        if(+enteredAge < 1){
          setError({
            title:"Invalid input",
            message:"Please enter a valid age ( > 0 )"
          })
          return
        }
        props.onAddUser(enteredName,enteredAge,enteredCollegeName)
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
        collegeNameRef.current.value = '';
        // setAge('')
        // setName('')
        // console.log(age,name)
    }

    // const usernameHandler = (event) =>{
    //   setName(event.target.value)
    // }

    // const ageHandler = (event) =>{
    //   setAge(event.target.value) 
    // }

    const errorHandler = () =>{
      setError(null)
    }

  return ( 
    <>
{  error &&  <Error onHandleError = {errorHandler} title = {error.title} message = {error.message}/>
}   


 <Card >
    <form onSubmit={submitHandler}>
        <label>Username</label>
        <input 
        ref={nameInputRef}
        id ="username"  
        type="text" 
        // value={name}
        // onChange={usernameHandler} 
        />

        <label>Age</label>
        <input 
        ref={ageInputRef} 
        id ="age" 
        type="number" 
        // value={age} 
        // onChange={ageHandler}
        />

       <label>College name</label>
        <input 
        ref={collegeNameRef} 
        id ="collegename" 
        type="text" 
        // value={age} 
        // onChange={ageHandler}
        />

        <Button type="submit">Add User</Button>
    </form>
    </Card>
    </>
  )
}

export default AddUsers;