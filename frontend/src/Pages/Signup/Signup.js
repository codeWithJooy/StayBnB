import React from "react";
import { ReactComponent as Signup } from "../../Assets/Signup/signup.jpg";
const SignUp = () => {
  return (
    <div className="main">
      <div className="container">
        <div className="card">
          <div className="cardImage">
            <Signup />
          </div>
          <div className="cardForm"></div>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
