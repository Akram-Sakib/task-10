import React from "react";
import Video from "./Video";
import { useGetVideosQuery } from "../../../features/videos/videosApi";

const Videos = () => {
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
    content = videos.map((video) => <Video key={video.id} video={video} />);
  }

  return (
    <div className="mx-auto max-w-full px-5 lg:px-20">
      <div className="px-3 py-20 bg-opacity-10">
        <div className="w-full flex">
          <button className="btn ml-auto">Add Video</button>
        </div>
        <div className="overflow-x-auto mt-4">
          <table className="divide-y-1 text-base divide-gray-600 w-full">
            <thead>
              <tr>
                <th className="table-th">Video Title</th>
                <th className="table-th">Description</th>
                <th className="table-th">Action</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-600/50">
              {content}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Videos;
