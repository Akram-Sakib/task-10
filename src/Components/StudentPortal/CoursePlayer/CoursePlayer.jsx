import React from "react";
import CourseVideos from "./CourseVideos";
import Video from "./Video";

const CoursePlayer = () => {
  return (
    <div className="mx-auto max-w-7xl px-5 lg:px-0">
      <div className="grid grid-cols-3 gap-2 lg:gap-8">
        <Video/>
        <CourseVideos />
      </div>
    </div>
  );
};

export default CoursePlayer;
