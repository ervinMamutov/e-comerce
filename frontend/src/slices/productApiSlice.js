import { PRODUCTS_URL } from '../constants.js';
import apiSlice from './apiSlice';

const productApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    useGetProductsQuery: builder.query({
      query: () => ({
        url: PRODUCTS_URL,
      }),
      keepUnusedDataFor: 5,
    }),
  }),
});

console.log(productApiSlice);
export const { useGetProductQuery } = productApiSlice;
console.log(useGetProductQuery);

export default productApiSlice;
