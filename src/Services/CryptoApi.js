import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

const  cryptoApiHeaders= {
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
    'X-RapidAPI-Key': 'c2b1985f72msh7c0eed89fbda276p148f33jsnaef86463cb58',
    
  };


  

const baseUrl =  'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({url, headers: cryptoApiHeaders})

export const cryptoApi = createApi ({
    reducerPath : 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),

    endpoints: (builder) => ({
        getCryptos: builder.query({
                query:()=> createRequest('/coins')
        })
    })
})

export const {
    useGetCryptosQuery,
} = cryptoApi