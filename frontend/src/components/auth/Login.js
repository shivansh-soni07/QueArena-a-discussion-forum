import React from "react";
import "./Login.css";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase";
// import LoginForm from "./LoginForm";

function Login() {
  const handleSubmit = async () => {
    await signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="login-container">
      <div className="login-content">
       <img
          src="quearena_logo1.jpg"
          alt="logo" className="main_logo" width={800} height={500}
        />
       
         
      <img
        src=" https://onymos.com/wp-content/uploads/2020/10/google-signin-button.png"
        alt="logo" onClick={handleSubmit} className="photo"
      />
      </div>
    </div>
  );
}

export default Login;
