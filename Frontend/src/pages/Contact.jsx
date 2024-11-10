import React, { useEffect } from "react";
import Button from "../Component/Button";
import { useAuth } from "../context/authprovider";
import axios from "axios";
import toast from 'react-hot-toast';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  const { authUser } = useAuth();
  
  const {
    register,
    handleSubmit,
    setValue
  } = useForm();

  useEffect(() => {
    if (authUser) {
      setValue("username", authUser.username);
      setValue("email", authUser.email);
    }
  }, [authUser, setValue]);

  const handleSubmited = async (data) => {
    try {
      const response = await axios.post("https://educatsy-3rtz.onrender.com/api/form/contact", data);
      if (response.status === 200) {
        toast.success("Form Submitted Successfully");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  const onError = (errors) => {
    Object.values(errors).forEach((error) => {
      toast.error(error.message);
    });
  };

  return (
    <div className="w-screen md:max-w-screen-sm h-screen bg-gray-900 flex items-center justify-center overflow-hidden">
      <i onClick={() => navigate("/home")} className="fa-solid fa-arrow-left absolute top-4 left-20 text-5xl mr-10"></i>
      <div className="w-3/4 max-w-4xl p-20 bg-gray-800 rounded-lg shadow-xl border border-gray-700">
        <h2 className="md:text-8xl text-6xl font-extrabold text-center text-white mb-8 animate__animated animate__fadeIn">
          Contact Us
        </h2>
        <form onSubmit={handleSubmit(handleSubmited, onError)} className="space-y-6">
          <div className="relative">
            <input
              type="text"
              className="w-full p-3 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300 ease-in-out"
              placeholder="Enter your username"
              {...register("username", { required: "Username is required" })}
            />
          </div>
          <div className="relative">
            <input
              type="email"
              className="w-full p-3 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300 ease-in-out"
              placeholder="Enter your email"
              {...register("email", { 
                required: "Email is required", 
                pattern: { 
                  value: /^\S+@\S+$/i, 
                  message: "Invalid email address" 
                } 
              })}
            />
          </div>
          <div className="relative">
            <textarea
              className="w-full p-3 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300 ease-in-out"
              cols="12" rows="5"
              placeholder="Write Here...."
              {...register("message", { required: "What's your message? Hmm" })}
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-green-500 text-white rounded-md text-4xl font-semibold hover:bg-green-400 transition-all duration-300 ease-in-out mt-6 transform hover:scale-105"
          >
            Send
          </button>
          <div className="text-center mt-4">
            <p className="text-gray-400 text-2xl md:text-3xl">
              Don't have an account?{" "}
              <a href="/login" className="cursor-pointer text-green-400 md:text-3xl text-2xl hover:text-green-300">
                Log in
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
