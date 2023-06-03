import Login from "./LoginPage";
import SignUp from "./SignupPage";
import { useEffect, useState } from "react";

const HomePage = (props) => {
  const [isLogin, setIsLogin] = useState(true);
  const [isSignUp, setIsSignUp] = useState(false);
  const [token, setToken] = useState(props.cookie);

  const handleLogin = () => {
    setIsLogin(true);
    setIsSignUp(false);
  }

  const handleSignUp = () => {
    setIsLogin(false);
    setIsSignUp(true);
  }

  const handleSuccefullLogin = () => {
    setIsLogin(false);
    setIsSignUp(false);
    props.onloginSuccefull();
    window.location.reload();
  }
  
  if(token.token !== null && token.token !== undefined && token.token !== ""){
    props.onloginSuccefull();
  }
    
  return (
    <div>
      {isLogin && <Login onHandleCookies={props.onHandleCookies} onHandleSignUp={handleSignUp} onSuccefullLogin={handleSuccefullLogin}/>}
      {isSignUp && <SignUp token={token.token} onHandleLogin={handleLogin}/>}
    </div>
  );
};

export default HomePage;
