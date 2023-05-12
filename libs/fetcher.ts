import axios from 'axios';

const BASE_URL = 'http://43.201.20.164:8080';
/*process.env.REST_URL_SERVER || */
const fetcher = axios.create({
  baseURL: BASE_URL,
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'http://43.201.20.164:8080',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    'Access-Control-Allow-Credentials': true,
  },
  withCredentials: true,
});

// const create = async ({ title, description }: FindMatePost) => {
//   const response = await axiosClient.post<any>('/findMatePost', {
//     title,
//     description,
//   });
//   return response.data;
// };
// const update = async (
//   id: any,
//   { title, description, published }: FindMatePost,
// ) => {
//   const response = await axiosClient.put<any>(`/findMatePost/${id}`, {
//     title,
//     description,
//     published,
//   });
//   return response.data;
// };
// const deleteById = async (id: any) => {
//   const response = await axiosClient.delete<any>(`/findMatePost/${id}`);
//   return response.data;
// };
// const deleteAll = async () => {
//   const response = await axiosClient.delete<any>('/findMatePost');
//   return response.data;
// };

// const fetcher = async ({
//   method,
//   path,
//   body,
//   params,
// }: {
//   method: 'GET' | 'POST' | 'PUT' | 'DELETE';
//   path: string;
//   body?: { [key: string]: any };
//   params?: { [key: string]: any };
// }) => {
//   try {
//     const url = `${BASE_URL}${path}`;
//     const fetchOptions: RequestInit = {
//       method,
//       mode: 'cors',
//       headers: {
//         'Content-Type': 'application/json',
//         'Access-Control-Allow-Origin': BASE_URL,
//       },
//     };
//     const response = await fetch(url, fetchOptions);
//     const json = await response.json();
//     return json;
//   } catch (err) {
//     console.error(err);
//   }
// };

export default fetcher;
