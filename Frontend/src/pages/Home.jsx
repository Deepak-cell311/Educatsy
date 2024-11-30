import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import banner from "../assets/image1.jpg";
import js from '../assets/js.png';
import node from '../assets/nodeJS.png';
import github from '../assets/github logo.webp';
import html from '../assets/HTML5.svg.png';
import mongodb from '../assets/mongodb.png';
import react from '../assets/react.png';
import css from '../assets/Css.png';
import express from '../assets/express.png';
import Faq from "../Component/Faq.jsx";
import Footer from "../Component/Footer.jsx";
import Authentication from "../Component/authentication.jsx";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader.js";
import Book from "../Component/Book.jsx";


const Home = () => {
  const images = [js, node, github, html, css, react, mongodb, express];
  const navItems = ['home', "about", "courses", "contact"];
  const [menuOpen, setMenuOpen] = useState(false);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false)
  const [showAllcourses, setShowAllcourses] = useState(false)

  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleAllCourses = () => {
    setShowAllcourses(!showAllcourses)
  }

  const coursesList = async () => {
    setLoading(true)
    try {
      const response = await axios(`https://educatsy-3rtz.onrender.com/api/course`)
      console.log("Response of course: ", response.data)
      if (response.data) {
        setCourses(response.data)
      }
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  console.log("courses: ", courses)

  useEffect(() => {
    coursesList()
  }, [])

  const courseToBeDisplayed = showAllcourses ? courses : courses.slice(0, 3)

  return (
    <div className="w-screen relative flex flex-col items-center justify-center bg-gray-900 overflow-hidden text-white">
      <Authentication />
      <div className="relative w-full h-screen">
        {/* <input type="search" className="absolute z-50 right-72 top-[3.2rem] bg-gray-400 rounded-xl px-1 py-6 outline-none text-4xl" placeholder="search"/> */}
        {/* <div className="absolute z-50">
          <ul className="flex flex-row m-2 p-2">
            <li className="mx-8 float-end">Home</li>
            <li className="mx-8 float-end">About</li>
            <li className="mx-8 float-end">Courses</li>
            <li className="mx-8 float-end">Contact</li>
          </ul>
        </div> */}
        <nav className="absolute z-50 mt-5 text-gray-400 text-5xl md:ml-10 cursor-pointer">
          <i className="fa-solid fa-bars mx-5" onClick={handleToggle}></i>
          <ul className={`flex flex-col md:ml-20 ml-40 ${menuOpen ? "block" : "hidden"}`}>
            {navItems.map((item) => (
              <li key={item} className="mt-10">
                <Link to={`/${item}`} className="navText md:-ml-20 -ml-28 text-4lg font-bold hover:text-green-500 text-gray-300">
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="relative overflow-hidden">
          <img
            className="md:w-screen w-full h-screen object-cover opacity-40 animate-fadeInImage"
            src={banner}
            alt="banner"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-70"></div>
        </div>

        <div className="text-center transform -translate-y-1/2 text-black">
          <h1 className="animate-fadeIn md:-mt-96 relative -mt-96 -top-96 md:top-0 text-6xl leading-tight md:text-9xl font-bold mb-4 text-orange-200 animate-slideInText mx-auto">
            Start your
            <span className="text-green-400 font-semibold"> programming</span>
            <br />
            <span className="text-green-400 font-semibold">Journey </span>
            with our <br />
            Dedicated community!
          </h1>

          <p className="-top-96 md:top-0 text-lg md:text-xl text-white mx-auto lg:text-2xl md:mt-2 text-center md:px-0 px-20 -mt-96 animate-pulse">
            Begin your coding adventure in our community, where learning is always appreciated and valued
          </p>

          <Link
            to="/Courses"
            className="inline-block text-5xl animate-bounce mt-12 px-10 py-10 bg-yellow-500 text-gray-900 font-bold rounded-lg hover:bg-yellow-600 hover:text-black transition-transform transform hover:scale-105 animate-fadeInButton"
          >
            Explore Resources
          </Link>
        </div>
      </div>

      {/* Courses Section */}
      <div>
        <h1 className="main-faq text-center text-5xl m-10 font-bold">Our Popular <span className="marquee-name">Courses</span></h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-8 py-4">
          {
            loading ? (
              <ClipLoader
                color={'#4b4bda'}
                loading={loading}
                cssOverride={override}
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            ) : (
              courseToBeDisplayed.map((course, index) => (
                <div key={index} className="w-[36rem] bg-gray-800 text-white shadow-inner shadow-gray-900 py-10 px-20 hover:scale-105 animate-fadeIn">
                  <img className="w-full h-80 object-fit " src={course.image} alt={course.title} />
                  <div>
                    <h1 className="text-5xl text-center m-3 font-extrabold">{course.name}</h1>
                    <h2 className="text-3xl text-center ">{course.title}</h2>
                    <button className="text-3xl text-center bg-blue-400 p-3 mx-auto rounded-lg w-full mt-10 relative">
                      <Link to="/Courses" className="hover:text-black">Click To get Course</Link>
                    </button>
                  </div>
                </div>)
              ))}
        </div>
        {showAllcourses ? <h1 onClick={handleAllCourses} className="cursor-pointer text-center text-3xl italic font-bold">Show Less</h1> : <h1 onClick={handleAllCourses} className="cursor-pointer text-center text-3xl italic font-bold">Show More</h1>}
      </div>

      <div>

        <Book/>
      </div>

      <div>
        <h1 className="main-faq text-center md:text-5xl text-normal md:m-40 my-16 font-bold">Showcase Your Mastered <span className="marquee-name">Skills</span></h1>
        <div className="box ">
          {images.map((image, i) => (
            <span key={i} style={{ "--i": i + 1 }}>
              <img className="object-contain mix-blend-multiply" src={image} alt="skill logo" />
            </span>
          ))}
        </div>
      </div>

      <Faq />
      <Footer />

    </div>
  );
};

export default Home;
