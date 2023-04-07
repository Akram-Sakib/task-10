import { format } from "date-fns";
import React from "react";
import { Link } from "react-router-dom";
import { useGetVideoQuery } from "../../../features/videos/videosApi";
import { useSelector } from "react-redux";

const Video = () => {
  const { selectedVideo } = useSelector((state) => state?.auth?.user);
  const {
    data: video,
    isLoading,
    isError,
    error,
  } = useGetVideoQuery(selectedVideo);

  // decide what to show based on the state
  let content = null;
  if (isLoading) {
    content = <div>Loading...</div>;
  }
  if (!isLoading && isError) {
    content = <div>{error.message}</div>;
  }
  if (!isLoading && !isError && video.id) {
    const { id, title, description, url, views, duration, createdAt } =
      video || {};

    content = (
      <div className="col-span-full w-full space-y-8 lg:col-span-2">
        <iframe
          width="100%"
          className="aspect-video"
          src={url}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        <div>
          <h1 className="text-lg font-semibold tracking-tight text-slate-100">
            {title}
          </h1>
          <h2 className=" pb-4 text-sm leading-[1.7142857] text-slate-400">
            Uploaded on {format(new Date(createdAt), "dd MMMM yyyy")}
          </h2>

          <div className="flex gap-4">
            <Link
              to="/#"
              className="px-3 font-bold py-1 border border-cyan text-cyan rounded-full text-sm hover:bg-cyan hover:text-primary"
            >
              এসাইনমেন্ট
            </Link>
            <Link
              to={`/quiz/${id}`}
              className="px-3 font-bold py-1 border border-cyan text-cyan rounded-full text-sm hover:bg-cyan hover:text-primary"
            >
              কুইজে অংশগ্রহণ করুন
            </Link>
          </div>
          <p className="mt-4 text-sm text-slate-400 leading-6">{description}</p>
        </div>
      </div>
    );
  }

  return content;
};

export default Video;
