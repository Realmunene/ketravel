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
    <div className="loginsignin">
      <h1>Login</h1>
      <form>
              <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngwing.com%2Fen%2Ffree-png-xgena&psig=AOvVaw0Xp7vlKE-L-VAJ_yqZZCKd&ust=1665345500050000&source=images&cd=vfe&ved=0CAkQjRxqFwoTCJDZpcm10foCFQAAAAAdAAAAABAJ" alt="logo"/>
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