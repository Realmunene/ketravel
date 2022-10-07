import React, {useState}from "react";
import '../App.css';

function Login() {
  const existingUser = {
    email:"admin@admin.com",
    password: "admin123"
  }
  const[user, setUser] = useState({name:"", email:""});
  const [error, setError] = useState("");
  const Logins = details => {
    console.log(details)
  }
  const Logout = ()=>
{
  console.log("logout")
}  
return (
    <div>
      <h1>Login</h1>
      <form>
              <img src="../images/profile.svg" alt="logo"/>
              <div>
                <label><b>Username: </b></label>
                <input type="text" name="username" placeholder="Username" />
              </div>
              <div>
              <label><b>Password: </b></label>
                <input type="password" name="password" placeholder="Password" />
              </div>
              <input type="submit" value="Login" /><br/>
              <label>
                  <input type="checkbox"/>Remember me
              </label> <br/>
              <a href="/signup">Sign up?</a>
      </form>
    </div>
  );
}

export default Login;