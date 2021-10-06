import React, { useState } from 'react'; 
import LoginForm from './components/LoginForm';


function App() {
  const adminUSer = {
    email: "admin@admin.com",
    password: "admin123"
  }

  const [user, setUser] = useState({name: "", email: ""});
  const [error, setError] = useState("");

  const Login = details => {
   console.log(details);
  }
  const Logout = () => {
    console.log("Logout");
  }
 
 return (
    <div className="App">
      {(user.email !="") ? (
        <div classname="welcome">
          <h2>welcome, <span>{user.name}</span></h2>
          <button>Logout</button>
          </div>

      ) : (
        <LoginForm/>
      )}
      
      
    </div>
  );
}


export default App;
