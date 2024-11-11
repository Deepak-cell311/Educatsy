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
    <div className="text-white mt-40">
      <h1 className="text-[6rem] font-bold text-center">Popular <span className="text-blue-500">Courses</span></h1>
      <p className="text-center  text-2xl mb-10">Our comprehensive project-based courses</p>
      <i onClick={() => navigate("/home")} className="cursor-pointer text-white fa-solid fa-arrow-left absolute top-4 left-20 text-5xl mr-10"></i>

      {/* Grid Layout for Courses */}
      <div className="main-card grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 p-4">
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
            <div key={course._id} className="max-w-sm w-full bg-gray-800 p-4 rounded-lg shadow-lg">
              <div className="">
                <Link to={`/course/${course._id}`}>
                  <img className="w-full h-60 object-fit rounded-md" loading="lazy" src={course.image} alt={course.name} />
                </Link>
                <Link to={`/course/${course._id}`} className="text-white text-2xl font-semibold mt-4 block">{course.title}</Link>
                <div className="flex items-center mt-2">
                  <ul className="flex">
                    {[...Array(5)].map((_, index) => (
                      <li key={index}>
                        <i
                          className={`fa-regular fa-star ${index < course.rating ? "fas text-yellow-400" : "far"}`}
                          onClick={() => handleClick(course._id, index)}
                        ></i>
                      </li>
                    ))}
                  </ul>
                  <span className="ml-2 text-gray-400 text-xl">100 Students</span>
                </div>
                <div className="fs-1 flex justify-between items-center mt-4 text-white">
                  <div className="text-xl font-semibold">${course.price}</div>
                  <section className="flex items-center space-x-2">
                    <i className="fa-solid fa-bars text-sm"></i>
                    <span className="text-xl">{course.lectures} Lectures</span>
                  </section>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Courses;
