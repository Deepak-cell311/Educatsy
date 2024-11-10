import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const { handleSubmit, register } = useForm();
  const onSubmit = async (data) => {
    try {
      const response = await axios.post("https://educatsy-3rtz.onrender.com/api/user/login", {
        email: data.email,
        password: data.password,
      });

      if (response.data) {
        toast.success("Login successful");
        navigate('/Courses')
        window.location.reload()
      }
      localStorage.setItem("Users", JSON.stringify(response.data.user));
    } catch (err) {
      if (err.response) {
        toast.error("Invalid credentials", err.response.data.message);
        console.log("Login error : ", err.response.data.message);
      }
    }
  };

  const onError = (errors) => {
    Object.values.forEach(error => {
      toast.error(error.message)
    });
  }

  return (
    <>
      <div className="w-screen md:max-w-screen-sm h-screen bg-gray-900 flex items-center justify-center overflow-hidden">
        <i onClick={() => navigate("/home")} className="fa-solid fa-arrow-left absolute top-4 left-20 text-5xl mr-10"></i>
        <div className="w-3/4 max-w-4xl p-20 bg-gray-800 rounded-lg shadow-xl border border-gray-700">
          <h2 className="md:text-8xl text-6xl font-extrabold text-center text-white mb-8 animate__animated animate__fadeIn ">
            Welcome Back
          </h2>

          <form onSubmit={handleSubmit(onSubmit, onError)} className="space-y-6">

            <div className="relative">
              <input
                type="email"
                className="w-full p-3 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300 ease-in-out"
                placeholder="Enter your email"

                {...register('email', { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" } })}
              />
              <div className="absolute top-0 right-0 text-gray-400 mt-3 mr-3 text-sm">
                <span className="animate__animated animate__fadeInUp text-5xl">📧</span>
              </div>
            </div>


            <div className="relative">
              <input
                type="password"
                className="w-full p-3 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300 ease-in-out"
                placeholder="Enter your password"

                {...register('password', {
                  required: "Password is required",
                  minLength: { value: 2, message: "Password must be minimum 8 character long " }
                })}
              />
              <div className="absolute top-0 right-0 text-gray-400 mt-3 mr-3 text-sm">
                <span className="animate__animated animate__fadeInUp text-5xl">🔒</span>
              </div>
            </div>


            <button
              type="submit"
              className="w-full py-3 bg-green-500 text-white rounded-md text-4xl font-semibold hover:bg-green-400 transition-all duration-300 ease-in-out mt-6 transform hover:scale-105"
            >
              Log In
            </button>

            <div className="text-center mt-4">
              <p className="text-gray-400 text-2xl md:text-3xl">
                Don't have an account?{" "}
                <a href="/signup" className="text-green-400 md:text-3xl text-2xl hover:text-green-300">
                  Sign Up
                </a>
              </p>
            </div>
          </form>

          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-700 via-blue-900 to-black opacity-50 z-[-1] animate__animated animate__fadeIn animate__delay-2s"></div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;

// import React, { useEffect } from 'react';

// const LoginPage = () => {
//   useEffect(() => {
//     // Check if the script already exists to avoid duplicates
//     const existingScript = document.getElementById('vismeScript');
//     if (!existingScript) {
//       const script = document.createElement('script');
//       script.src = 'https://static-bundles.visme.co/forms/vismeforms-embed.js';
//       script.id = 'vismeScript';
//       document.body.appendChild(script);
//     }
//   }, []);
//   // <div className="visme_d" 
//   //      data-title="Untitled Project" 
//   //      data-url="z41nx8ko-untitled-project?fullPage=true" 
//   //      data-domain="forms" 
//   //      data-full-page="true" 
//   //      data-min-height="100vh" 
//   //      data-form-id="101869">
//   // </div>
//   return (<>

//     <div className="visme_d"
//       data-title="Untitled Project"
//       data-url="z41nx8ko-untitled-project?fullPage=true"
//       data-domain="forms"
//       data-full-page="true"
//       data-min-height="100vh"
//       data-form-id="101869"
//       style={{ backgroundColor: '#162132' }}
//     >
//     </div>
//     {/* <script src="https://static-bundles.visme.co/forms/vismeforms-embed.js"></script> */}
//   </>
//   );
// };

// export default LoginPage;
