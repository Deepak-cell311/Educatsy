import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import banner from "../assets/image1.jpg";
import js from '../assets/js.png'
import node from '../assets/nodeJS.png'
import github from '../assets/github logo.webp'
import html from '../assets/HTML5.svg.png'
import mongodb from '../assets/mongodb.png'
import react from '../assets/react.png'
import css from '../assets/Css.png'
import express from '../assets/express.png'
import Faq from "../Component/Faq"
import { useAuth } from "../context/authprovider"
import Footer from "./Footer";

const Home = () => {
  const images = [js, node, github, html, css, react, mongodb, express];
  const navItems = ['home', "about", "courses", "contact", "login"]
  const [menuOpen, setMenuOpen] = useState(true)
  const handleToggle = () => {
    setMenuOpen(!menuOpen)
  }

  // useEffect(() => {
  //   const isMobile = window.innerWidth < 768;
  //   if (isMobile) {
  //     alert("Switch to the desktop site for the best experience. Mobile view is under maintenance.");
  //   }
  // }, []);
  // const {authUser} = useAuth();
  return (
    <div className=" w-screen relative flex flex-col items-center justify-center bg-gray-900 overflow-hidden text-white">
      <div className="relative w-full h-screen" >
        <nav className="absolute z-50 mt-5 text-gray-400 text-5xl md:ml-10 cursor-pointer">
          <i className="fa-solid fa-bars mx-5" onClick={handleToggle}></i>
          <ul className={`flex flex-col md:ml-20 ml-40  ${menuOpen ? "hidden" : "block"}`} >
            {navItems.map((item) => (
              <li key={item} className="mt-10">
                <Link to={`/${item}`} className="navText -ml-28  text-4lg font-bold hover:text-green-500 text-gray-300" >{item.charAt(0).toUpperCase() + item.slice(1)}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="relative overflow-hidden">
          <img
            className="md:w-screen w-full  h-screen object-cover opacity-40 animate-fadeInImage "
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
          {/* <h1 className="text-5xl text-white" > Start Your Programming Journey With Our Dedicated Community !</h1> */}

          <p className="-top-96 md:top-0 text-lg md:text-xl text-white mx-auto lg:text-2xl md:mt-2 text-center md:px-0 px-20 -mt-96 animate-pulse text">
            Begin your coding adventure in our community, where learning is always appreciated and valued
          </p>

          <Link
            to="/Courses"
            className="inline-block text-5xl animate-bounce mt-12 px-10 py-10 bg-yellow-500 text-gray-900 font-bold rounded-lg hover:bg-yellow-600 hover:text-black transition-transform transform hover:scale-105 animate-fadeInButton"
          >
            Explore Resources
          </Link>
          vsvs
        </div>
      </div>

      {/* Courses */}
      <div>
        <h1 className="main-faq text-center text-5xl m-10 font-bold">Our Popular <span className="marquee-name">Courses</span></h1>

        {/* Grid container for 3 boxes per row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-8 py-4">

          {/* First Box */}
          <div className="boxes bg-gray-300 shadow-inner shadow-gray-900 text-black py-10 px-28 hover:scale-105 ">
            <img className="w-full h-80 object-contain" src={html} alt="" />
            <div>
              <h1 className="text-5xl text-center m-3 font-extrabold">HTML</h1>
              <h2 className="text-3xl text-center text-gray-700">HTML is the standard markup language for Web pages.With HTML you can create your own Website. HTML is easy to learn - You will enjoy it!</h2>
              <button className="text-3xl text-center bg-blue-400 p-3 mx-auto rounded-lg w-full mt-10">
                <a href="/login" className="hover:text-black">Click To get Course</a>
              </button>
            </div>
          </div>

          {/* Second Box */}
          <div className="boxes bg-gray-300 shadow-inner shadow-gray-900 text-black py-10 px-20 hover:scale-105">
            <img className="w-full h-80 object-contain mix-blend-multiply" src={css} alt="" />
            <div>
              <h1 className="text-5xl text-center m-3 font-extrabold">CSS</h1>
              <h1 className="text-3xl text-center text-gray-700">CSS is the language we use to style an HTML document. CSS describes how HTML elements should be displayed. This tutorial will teach you CSS from basic to advanced.</h1>
              <button className="text-3xl text-center bg-blue-400 p-3 mx-auto rounded-lg w-full mt-10">
                <a href="/login" className="hover:text-black">Click To get Course</a>
              </button>
            </div>
          </div>

          {/* Third Box */}
          <div className="boxes bg-gray-300 shadow-inner shadow-gray-900 text-black py-10 px-20 hover:scale-105">
            <img className="w-full h-80 object-contain" src={js} alt="course" />
            <div>
              <h1 className="text-5xl text-center m-3 font-extrabold">JavaScript</h1>
              <h2 className="text-3xl text-center text-gray-700">JavaScript is the world's most popular programming language. JavaScript is the programming language of the Web. JavaScript is easy to learn. This tutorial will teach you JavaScript from basic to advanced.</h2>
              <button className="text-3xl text-center bg-blue-400 p-3 mx-auto rounded-lg w-full mt-10">
                <a href="/login" className="hover:text-black">Click To get Course</a>
              </button>
            </div>
          </div>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10 p-8">

          <div className="boxes  bg-gray-300 shadow-inner shadow-gray-900 text-black py-10 px-20 hover:scale-105">
            <img className="w-full h-80 object-cover mix-blend-multiply" src={node} alt="" />
            <div>
              <h1 className="text-5xl text-center m-3 font-extrabold ">NodeJs</h1>
              <h1 className="text-3xl text-center">Node.js is an open source, cross-platform runtime environment and library that is used for running web applications outside the client's browser.</h1>
              <button href="/login" className="text-3xl text-center bg-blue-400 p-3 mx-auto rounded-lg w-full mt-10">
                <a href="/login" className="hover:text-black">Click To get Course</a>
              </button>
            </div>
          </div>

          <div className="boxes bg-gray-300 shadow-inner shadow-gray-900 text-black py-10 px-20 hover:scale-105">
            <img className="w-full h-80 object-contain mix-blend-multiply" src={mongodb} alt="" />
            <div>
              <h1 className="text-5xl text-center m-3 font-extrabold">MongoDB</h1>
              <h1 className="text-3xl text-center">MongoDB is a document database. It stores data in a type of JSON format called BSON. If you are unfamiliar with JSON, check out our JSON tutorial. A record in MongoDB is a document, which is a data structure composed of key value pairs similar to the structure of JSON objects.</h1>
              <button className="text-3xl text-center bg-blue-400 p-3 mx-auto rounded-lg w-full mt-10">
                <a href="/login" className="hover:text-black">Click To get Course</a>
              </button>
            </div>
          </div>

          <div className="boxes bg-gray-300 shadow-inner shadow-gray-900 text-black py-10 px-20 hover:scale-105">
            <img className="w-full h-80 object-contain" src={express} alt="course" />
            <div>
              <h1 className="text-3xl text-center m-3 font-extrabold">Express Js</h1>
              <h1 className="text-3xl text-center">Express is a fast, unopinionated, minimalist web framework for Node.js, providing a robust set of features for web and mobile applications.</h1>
              <button className="text-3xl text-center bg-blue-400 p-3 mx-auto rounded-lg w-full mt-10">
                <a href="/login" className="hover:text-black">Click To get Course</a>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div>
          <h1 className="main-faq text-center md:text-5xl text-normal md:m-40 my-16 font-bold">Showcase Your Mastered <span className="marquee-name">Skills</span></h1>
          <div className="box">
            {images.map((image, i) => (
              <span key={i} style={{ "--i": i + 1 }}>
                <img className="object-fit mix-blend-multiply" src={image} alt="skill logo" />
              </span>
            ))}
          </div>
        </div>
      </div>

      <Faq />
      <Footer />
    </div>


  );
};

export default Home;
