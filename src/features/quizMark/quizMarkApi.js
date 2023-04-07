import { apiSlice } from "../api/apiSlice";

export const quizMarkApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getQuizMarks: builder.query({
      query: () => "/quizMark",
    }),
    getQuizMark: builder.query({
      query: (quizMarkId) => `/quizMark/${quizMarkId}`,
    }),
    createQuizMark: builder.mutation({
      query: (data) => ({
        url: "/quizMark",
        method: "POST",
        body: data,
      }),
    }),
    updateQuizMark: builder.mutation({
      query: (data) => ({
        url: `/quizMark/${data.id}`,
        method: "PUT",
        body: data,
      }),
    }),
    deleteQuizMark: builder.mutation({
      query: (quizMarkId) => ({
        url: `/quizMark/${quizMarkId}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetQuizMarksQuery,
  useGetQuizMarkQuery,
  useCreateQuizMarkMutation,
  useUpdateQuizMarkMutation,
  useDeleteQuizMarkMutation,
} = quizMarkApi;
