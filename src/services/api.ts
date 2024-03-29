import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../store';
import qs from 'qs';
import { Supplier, Suppliers } from './api.types';

const AUTH_TOKEN = import.meta.env.VITE_AUTH_TOKEN;

export const api = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
        credentials: 'omit',
        baseUrl: 'https://test-case.cayena.io',
        prepareHeaders: (headers, { getState }) => {
            // By default, if we have a token in the store, let's use that for authenticated requests
            const token = (getState() as RootState).auth.token;
            if (token) {
                headers.set('authorization', `Bearer ${token}`);
                headers.set('Content-Type', 'application/json');
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
                headers: {
                    authorization: `Basic ${AUTH_TOKEN}`,
                    'Content-type':
                        'application/x-www-form-urlencoded; charset=UTF-8',
                },
            }),
            transformErrorResponse: () => {
                localStorage.clear();
            },
        }),
        getSupplies: builder.query({
            query: () => ({ url: 'suppliers' }),
            transformResponse: (response: Suppliers[]) => response,
            transformErrorResponse: () => {
                localStorage.clear();
            },
        }),
        getSuppliesById: builder.query({
            query: (id: string) => ({ url: `suppliers/${id}` }),
            transformResponse: (response: Supplier) => response,
            transformErrorResponse: () => {
                localStorage.clear();
            },
        }),
        updateSupplier: builder.mutation({
            query: (body) => ({
                url: 'suppliers',
                method: 'PUT',
                body,
            }),
            transformErrorResponse: () => {
                localStorage.clear();
            },
        }),
    }),
});

export const {
    useLoginMutation,
    useGetSuppliesQuery,
    useGetSuppliesByIdQuery,
    useUpdateSupplierMutation,
} = api;
