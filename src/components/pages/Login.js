import React from "react";
import LoginForm from "../forms/LoginForm"

class Login extends React.Component{
  submit = data => {
    console.log(data);
  };

  render(){
    return(
      <div>
        <LoginForm submit={this.submit}/>
      </div>
    );
  }
}

export default Login;
