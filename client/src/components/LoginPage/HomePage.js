import Login from "./LoginPage";
import SignUp from "./SignupPage";
import { useState } from "react";

const HomePage = (props) => {
  const [isLogin, setIsLogin] = useState(true);
  const [isSignUp, setIsSignUp] = useState(false);

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
  }
  
  return (
    <div>
      {isLogin && <Login onHandleSignUp={handleSignUp} onSuccefullLogin={handleSuccefullLogin}/>}
      {isSignUp && <SignUp onHandleLogin={handleLogin}/>}
    </div>
  );
};

export default HomePage;
