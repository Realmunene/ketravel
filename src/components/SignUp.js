import React from "react";

function SignUp() {
  return (
    <div>
      <h1>Login</h1>
      <form>
        <img src="#" alt="logo"/>
        <div>
          <label><b>Username: </b></label>
          <input type="text" name="username" placeholder="Username" />
        </div>
        <div>
        <label><b>Password: </b></label>
          <input type="password" name="password" placeholder="Password" />
        </div>
        <input type="submit" value="Register" />
      </form>
    </div>
  );
}
export default SignUp;