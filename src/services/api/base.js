/* eslint-disable no-unsafe-optional-chaining */
// Import the RTK Query methods from the React-specific entry point
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getSessionStorage } from "../../utils/browserStorage";

// Define our single API slice object
export const apiSlice = createApi({
  // The cache reducer expects to be added at `state.api` (already default - this is optional)
  reducerPath: "api",

  // The base URL for all API requests - read from the environment variable
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_BASE_URL, // update the API base URL in .env file.
    prepareHeaders: (headers, { getState }) => {
      // Add any additional headers here
      const user = getState().authReducer.user || getSessionStorage("user");
      if (user.accessToken) {
        headers.set("x-access-token", user.accessToken);
      }
      return headers;
    },
  }),
  // The "endpoints" represent operations and requests for this server
  endpoints: () => ({}),
});
