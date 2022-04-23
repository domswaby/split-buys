import React from "react";
import { Link } from "react-router-dom";

const Greeting = (props) => {
  
   return (
     <div>
      {props.currentUser ? 
        <div>
          <h1>Greetings to you {props.currentUser.username}.</h1>
          <button onClick={() => props.logout()}>Logout</button>
         </div>
        : 
        <div>
          <h1>Not logged in</h1>
          <Link to="/signup">Signup</Link>
          <Link to="/login">Login</Link>
        </div>
      }
     </div>
   )
  }

export default Greeting;

