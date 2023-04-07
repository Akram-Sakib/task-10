import { apiSlice } from "../api/apiSlice";

export const quizzesApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getQuizzes: builder.query({
      query: () => "/quizzes",
    }),
    getQuiz: builder.query({
      query: (videoId) => `/quizzes?video_id=${videoId}`,
    }),
    createQuiz: builder.mutation({
      query: (data) => ({
        url: "/quizzes",
        method: "POST",
        body: data,
      }),
    }),
    updateQuiz: builder.mutation({
      query: (data) => ({
        url: `/quizzes/${data.id}`,
        method: "PUT",
        body: data,
      }),
    }),
    deleteQuiz: builder.mutation({
      query: (quizId) => ({
        url: `/quizzes/${quizId}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetQuizzesQuery,
  useGetQuizQuery,
  useCreateQuizMutation,
  useUpdateQuizMutation,
  useDeleteQuizMutation,
} = quizzesApi;
