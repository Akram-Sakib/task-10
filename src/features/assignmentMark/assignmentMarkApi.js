import { apiSlice } from "../api/apiSlice";

export const assignmentMarkApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAssignmentMarks: builder.query({
      query: () => "/assignmentMark",
    }),
    getAssignmentMark: builder.query({
      query: (student_id) => `/assignmentMark?student_id=${student_id}`,
    }),
    createAssignmentMark: builder.mutation({
      query: (data) => ({
        url: "/assignmentMark",
        method: "POST",
        body: data,
      }),
    }),
    updateAssignmentMark: builder.mutation({
      query: (data) => ({
        url: `/assignmentMark/${data.id}`,
        method: "PUT",
        body: data,
      }),
    }),
    deleteAssignmentMark: builder.mutation({
      query: (assignmentMarkId) => ({
        url: `/assignmentMark/${assignmentMarkId}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetAssignmentMarksQuery,
  useGetAssignmentMarkQuery,
  useCreateAssignmentMarkMutation,
  useUpdateAssignmentMarkMutation,
  useDeleteAssignmentMarkMutation,
} = assignmentMarkApi;
