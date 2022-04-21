import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const rootServices = createApi({
  reducerPath: "countriesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://restcountries.com/v3.1",
  }),
  endpoints: () => ({}),
});
