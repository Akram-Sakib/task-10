import { apiSlice } from "../api/apiSlice";

export const videosApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getVideos: builder.query({
      query: () => "/videos",
    }),
    getVideo: builder.query({
      query: (videoId) => `/videos/${videoId}`,
    }),
    createVideo: builder.mutation({
      query: (data) => ({
        url: "/videos",
        method: "POST",
        body: data,
      }),
    }),
    updateVideo: builder.mutation({
      query: (data) => ({
        url: `/videos/${data.id}`,
        method: "PUT",
        body: data,
      }),
    }),
    deleteVideo: builder.mutation({
      query: (videoId) => ({
        url: `/videos/${videoId}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetVideosQuery,
  useGetVideoQuery,
  useCreateVideoMutation,
  useUpdateVideoMutation,
  useDeleteVideoMutation,
} = videosApi;
