import React from "react";
import YouTube from "react-youtube";

function CourseVideo({ videoId }) {
  const opts = {
    height: "450",
    width: "1000",
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <>
      <div className="bg-gray-900 w-screen mx-10 mt-10 ">
        <div className="mx-5 max-w-1/2">
          <YouTube videoId={videoId} opts={opts} />
        </div>
      </div>
    </>
  );
}

export default CourseVideo;
