import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../store';
import qs from 'qs';

export const api = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://test-case.cayena.io',
        prepareHeaders: (headers, { getState }) => {
            // By default, if we have a token in the store, let's use that for authenticated requests
            const token = (getState() as RootState).auth.token;
            if (token) {
                headers.set('authorization', `Bearer ${token}`);
            } else {
                headers.set(
                    'authorization',
                    `Basic Y2F5ZW5hLXRlc3Q6ZGQzZWQ5MGUtNjY3Zi00MjQ4LWE2NzEtOTI2NjI2MWRiYTVi`,
                );
                headers.set(
                    'Content-type',
                    'application/x-www-form-urlencoded; charset=UTF-8',
                );
            }
            return headers;
        },
    }),
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (credentials) => ({
                url: '/oauth/token',
                method: 'POST',
                body: qs.stringify(credentials),
            }),
        }),
    }),
});

export const { useLoginMutation } = api;
