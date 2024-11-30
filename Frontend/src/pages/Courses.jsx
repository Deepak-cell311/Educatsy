import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

function Courses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleClick = (courseId, starIndex) => {
    const newRating = starIndex + 1;
    setCourses(courses.map(course =>
      course._id === courseId ? { ...course, rating: newRating } : course
    ));
  };

  useEffect(() => {
    const getCourse = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`https://educatsy-3rtz.onrender.com/api/course`);
        setCourses(response.data.map(course => ({ ...course, rating: 0 })));
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getCourse();
  }, []);

  const navigate = useNavigate();

  return (
    <div className="bg-gray-900 w-screen">
      <div className="text-white py-20 px-6">
        <h1 className="text-[3rem] md:text-[5rem] font-extrabold text-center leading-tight">
          Popular <span className="text-blue-500">Courses</span>
        </h1>
        <p className="text-center text-lg md:text-2xl mt-4 mb-10">
          Our comprehensive project-based courses
        </p>
        <i
          onClick={() => navigate("/home")}
          className="cursor-pointer text-white fa-solid fa-arrow-left absolute top-4 left-6 md:left-10 text-3xl md:text-5xl"
        ></i>

        {/* Grid Layout for Courses */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-3/4 m-auto">
          {/* Loading Spinner */}
          {loading ? (
            <div className="flex justify-center items-center w-full col-span-full min-h-[60vh]">
              <ClipLoader
                color={'#4b4bda'}
                loading={loading}
                cssOverride={override}
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            </div>
          ) : (
            courses.map((course) => (
              <div
                key={course._id}
                className="bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
              >
                <Link to={`/course/${course._id}`}>
                  <img
                    className="w-full h-48 md:h-60 object-fit rounded-md"
                    loading="lazy"
                    src={course.image}
                    alt={course.name}
                  />
                </Link>
                <Link
                  to={`/course/${course._id}`}
                  className="block mt-4 text-xl md:text-2xl font-semibold text-white hover:text-blue-400 transition-colors duration-200"
                >
                  {course.title}
                </Link>
                <div className="flex items-center mt-2">
                  <ul className="flex space-x-1">
                    {[...Array(5)].map((_, index) => (
                      <li key={index}>
                        <i
                          className={`fa-star ${index < course.rating
                              ? "fas text-yellow-400"
                              : "far text-gray-400"
                            } cursor-pointer`}
                          onClick={() => handleClick(course._id, index)}
                        ></i>
                      </li>
                    ))}
                  </ul>
                  <span className="ml-3 text-gray-400 text-sm md:text-base">
                    100 Students
                  </span>
                </div>
                <div className="flex justify-between items-center mt-4 text-white">
                  <div className="text-lg md:text-xl font-bold">
                    ${course.price}
                  </div>
                  <section className="flex items-center space-x-2 text-sm md:text-base">
                    <i className="fa-solid fa-bars text-blue-500"></i>
                    <span>{course.lectures} Lectures</span>
                  </section>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Courses;
