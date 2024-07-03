import React from "react"
import { Link } from "react-router-dom"
import { useState } from "react"
import { useAuth } from "../context/authprovider"
import Logout from "./Logout"
function Navbar() {

     const [setNav, isSetNav] = useState(0)
     const [mobile, setMobile] = useState(false)
     const [authUser] = useAuth()
     console.log(authUser);


     const handleMobileNavigationBar = () => {
          console.log("mobile :", mobile)
          setMobile(!mobile)
     }

     const handlelink = () => {
          setMobile("")
     }
     return (
          <>
               <nav className="navigation d-flex justify-content-between">
                    <div className="logo">

                         <div className="mobile-navbar">
                              <i className={`fa-solid ${mobile ? 'fa-xmark close' : 'fa-bars menu'}`} onClick={handleMobileNavigationBar}></i>

                              {mobile && <li className="menu-list">
                                   <Link to="/Home" onClick={handlelink}>Home</Link>
                                   <Link to="/AboutUs" onClick={handlelink}>About</Link>
                                   <Link to="/Courses" onClick={handlelink}>Courses</Link>
                                   <Link to="/Contact" onClick={handlelink}>Contact</Link> 
                              </li>}




                         </div>

                         <Link to="/" className="logo-name" >Educatsy</Link>


                         {["Home", "About Us", "Courses", "Contact"].map((item, index) => (
                              <li style={{ listStyle: "none", padding: "2.5rem", color: "white" }} key={index} onClick={() => isSetNav(index)} className={`${index === setNav ? "active" : ""} list-none navbar-element`}>
                                   <Link className="text-white text-decoration-none" to={`/${item.replace(/\s+/g, '')}`}>{item}</Link>
                              </li>

                         ))}

                    </div>

                    <form className=" navbar-form d-flex justify-content-between " action="">
                         {
                              authUser ? <Logout /> : <Link to="/login"><button className="btn btn-warning" type="submit">Login</button></Link>
                         }
                    </form>
               </nav>
          </>
     )
}

export default Navbar
