import React from "react";
import Card from "./Card";
import Button from "./Button";
import './Error.css';
const Error = (props) =>{
    return(
        <>
        <div className="backdrop" onClick={props.onHandleError}>
        <Card>
        <header className="header">
            <h2>{props.title}</h2>
        </header>

        <div className="content">
            <p>{props.message}</p>
        </div>

        <footer className="actions">
            <Button onClick = {props.onHandleError}>Okay</Button>
        </footer>

        </Card>
        </div>
        </>
    )
}

export default Error;



// import React from "react";
// import Card from "./Card";
// import Button from "./Button";
// import ReactDOM from 'react-dom';
// import './Error.css';


// const Backdrop = (props) =>{
//     return <div className="backdrop" onClick={props.onHandleError} />
// }

// const Overlay = (props) =>{
//     return(
//     <Card>
//     <header className="header">
//         <h2>{props.title}</h2>
//     </header>

//     <div className="content">
//         <p>{props.message}</p>
//     </div>

//     <footer className="actions">
//         <Button onClick = {props.onHandleError}>Okay</Button>
//     </footer>

//     </Card>
//     )
// }

// const Error = (props) =>{
//     return(
//         <>
//         {/* <div className="backdrop" onClick={props.onHandleError}> */}
       
//         {/* </div> */}

//         {ReactDOM.createPortal(<Backdrop onClick = {props.onHandleError}/>, document.getElementById('backdrop-root'))}

//         {ReactDOM.createPortal(<Overlay title = {props.title} message = {props.message} onClick = {props.onHandleError} />, document.getElementById('overlay-root'))}

//         </>
//     )
// }

// export default Error;