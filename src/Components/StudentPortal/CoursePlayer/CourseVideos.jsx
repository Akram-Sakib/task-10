import React from "react";
import { useGetVideosQuery } from "../../../features/videos/videosApi";
import CourseVideo from "./CourseVideo";

const CourseVideos = () => {
  const { data: videos, isError, isLoading, error } = useGetVideosQuery();

  // decide what to show based on the state
  let content = null;
  if (isLoading) {
    content = <div>Loading...</div>;
  }
  if (!isLoading && isError) {
    content = <div>{error.message}</div>;
  }
  if (!isLoading && !isError && videos.length > 0) {
    content = videos.map((video) => (
      <CourseVideo key={video.id} video={video} />
    ));
  }

  return (
    <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto bg-secondary p-4 rounded-md border border-slate-50/10 divide-y divide-slate-600/30">
      {content}
    </div>
  );
};

export default CourseVideos;
