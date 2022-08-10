import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Add from "./Pages/Add";
import Edit from "./Pages/Edit";
import Error from "./Pages/Error";
import Home from "./Pages/Home";
import Users from "./Pages/Users";
import Boutique from "./Pages/Boutique";
import AddBoutique from "./Pages/AddBoutique";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";

import Photo from "./Pages/Photo";
import AddPhoto from "./Pages/AddPhoto";
import EditBoutique from "./Pages/EditBoutique";
import { useDispatch, useSelector } from "react-redux";
import { current } from "./JS/Actions/user";

import { currentAdmin } from "./JS/Actions/admin";
import DevisList from "./Components/DevisList";
import AddDevis from "./Pages/AddDevis";
import { currentVisitor } from "./JS/Actions/visitor";
import EditPhoto from "./Pages/EditPhoto";
import TodoList from "./Components/TodoList";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(current());
    }
  }, [dispatch]);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(currentAdmin());
    }
  }, [dispatch]);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(currentVisitor());
    }
  }, [dispatch]);
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  const isAuthAdmin = useSelector((state) => state.adminReducer.isAuthAdmin);
  const isAuthVisitor = useSelector(
    (state) => state.visitorReducer.isAuthVisitor
  );
  return (
    <div className="App">
      <Navbar />

      <Routes>
        {isAuth || isAuthAdmin ? (
          <Route path="/todo" element={<TodoList />} />
        ) : null}
        {isAuth || isAuthAdmin || isAuthVisitor ? (
          <>
            (<Route path="/add" element={<Add />} />
            <Route path="/addBoutique" element={<AddBoutique />} />
            <Route path="/addPhoto" element={<AddPhoto />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="/editBoutique/:id" element={<EditBoutique />} />
            <Route path="/editPhoto/:id" element={<EditPhoto />} />
            <Route path="/users" element={<Users />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/devis" element={<DevisList />} />){" "}
          </>
        ) : (
          <>
            {" "}
            <Route path="/*" element={<Error />} />{" "}
          </>
        )}
        <Route path="/boutiques" element={<Boutique />} />
        <Route path="/photo" element={<Photo />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        {isAuthVisitor ? (
          <Route path="/addDevis" element={<AddDevis />} />
        ) : null}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
