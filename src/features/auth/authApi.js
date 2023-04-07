import { apiSlice } from "../api/apiSlice";
import { userLoggedIn } from "./authSlice";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (data) => ({
        url: "/register",
        method: "POST",
        body: data,
      }),
    }),
    login: builder.mutation({
      query: (data) => ({
        url: "/login",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          if (result.data) {
            localStorage.setItem(
              "auth",
              JSON.stringify({
                ...result.data,
                user: { ...result.data.user, selectedVideo: 2 },
              })
            );

            dispatch(
              userLoggedIn({
                ...result.data,
                user: { ...result.data.user, selectedVideo: 2 },
              })
            );
          }
        } catch (error) {
          console.log(error);
        }
      },
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation } = authApi;

export default authApi;
