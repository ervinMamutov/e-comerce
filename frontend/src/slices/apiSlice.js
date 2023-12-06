import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { BASE_URL } from '../constants.js';

const baseQuery = fetchBaseQuery({ baseUrl: BASE_URL });
console.log(baseQuery);

const apiSlice = createApi({
  baseQuery,
  tagTypes: ['Product', 'Order', 'User'],
  endpoints: (builder) => ({}),
});

console.log(apiSlice);
export default apiSlice;
