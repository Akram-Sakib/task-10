import { apiSlice } from "../api/apiSlice";

export const assignmentsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAssignments: builder.query({
      query: () => "/assignments",
    }),
    getAssignment: builder.query({
      query: (assignmentId) => `/assignments/${assignmentId}`,
    }),
    createAssignment: builder.mutation({
      query: (data) => ({
        url: "/assignments",
        method: "POST",
        body: data,
      }),
    }),
    updateAssignment: builder.mutation({
      query: (data) => ({
        url: `/assignments/${data.id}`,
        method: "PUT",
        body: data,
      }),
    }),
    deleteAssignment: builder.mutation({
      query: (assignmentId) => ({
        url: `/assignments/${assignmentId}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetAssignmentsQuery,
  useGetAssignmentQuery,
  useCreateAssignmentMutation,
  useUpdateAssignmentMutation,
  useDeleteAssignmentMutation,
} = assignmentsApi;
