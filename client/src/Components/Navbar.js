import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as FiIcons from "react-icons/fi";
import * as MdIcons from "react-icons/md";
import * as RiIcons from "react-icons/ri";
import * as CgIcons from "react-icons/cg";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./Navbar.css";
import { IconContext } from "react-icons";
import { Container, Nav } from "react-bootstrap";
import { logoutVisitor } from "../JS/Actions/visitor";
import { logoutAdmin } from "../JS/Actions/admin";
import { logoutUser } from "../JS/Actions/user";
import { useDispatch, useSelector } from "react-redux";
import logo from "./logo.png";
function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  const isAuthAdmin = useSelector((state) => state.adminReducer.isAuthAdmin);
  const isAuthVisitor = useSelector(
    (state) => state.visitorReducer.isAuthVisitor
  );
  const dispatch = useDispatch();

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <Container>
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
            <Nav
              className="mx-auto"
              style={{
                display: "flex",
                justifyContent: "space-around",
                width: "70%",
              }}
            >
              <Link to="/">
                <AiIcons.AiOutlineHome />
              </Link>

              <Link to="/boutiques">
                <MdIcons.MdProductionQuantityLimits />
              </Link>
              <Link to="/photo">
                <RiIcons.RiGalleryLine />
              </Link>
              {isAuth || isAuthAdmin ? <Link to="/todo">Item List</Link> : null}
              {isAuth || isAuthAdmin || isAuthVisitor ? (
                <>
                  <Link to="/users">
                    <FiIcons.FiUsers />
                  </Link>

                  <Link to="/profile">
                    <CgIcons.CgProfile />
                  </Link>
                  <Link to="/addDevis">Add Devis</Link>
                  <Link
                    to="/login"
                    onClick={() =>
                      dispatch(logoutVisitor()) &&
                      dispatch(logoutAdmin()) &&
                      dispatch(logoutUser())
                    }
                  >
                    <CgIcons.CgLogOff />
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/login">Login</Link>
                  <Link to="/register">Register</Link>
                </>
              )}

              {/* <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form> */}
            </Nav>
          </Container>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                Clima Plus
              </Link>
            </li>

            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
