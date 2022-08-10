import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Notification from "../Components/Notification";
import { loginAdmin } from "../JS/Actions/admin";
import { login } from "../JS/Actions/user";
import { loginVisitor } from "../JS/Actions/visitor";
import "./login.css";

const Login = () => {
  const [User, setUser] = useState({});
  const [Admin, setAdmin] = useState({});
  const [Visitor, setVisitor] = useState({});
  const errors = useSelector((state) => state.userReducer.errors);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChangeUser = (e) => {
    setUser({ ...User, [e.target.name]: e.target.value });
    setAdmin({ ...Admin, [e.target.name]: e.target.value });
    setVisitor({ ...Visitor, [e.target.name]: e.target.value });
  };
  

  const handleUser = (e) => {
    e.preventDefault();
    dispatch(login(User)) && dispatch(loginAdmin(Admin)) && dispatch(loginVisitor(Visitor) );
    navigate('/profile')
  };
 

  return (
    <div>
      

      <form action="#!" id="main">
        <h2>Login to your account</h2>
        {errors && errors.map((el) => <Notification error={el} />)}
        <div className="input-parent">
          <label htmlFor="username"> Username or Email</label>
          <input
            type="text"
            id="username"
            name="email"
            onChange={handleChangeUser}
          />
        </div>
        <div className="input-parent">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={handleChangeUser}
          />
        </div>
        <button className="btn" type="submit" onClick={handleUser} style={{backgroundColor:'white'}}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
