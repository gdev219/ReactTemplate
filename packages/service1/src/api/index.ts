import { useBoundStore } from '../store';

/**
 * if you uncomment code below then you can configure token based authentication.
 */

// const mode = import.meta.env.MODE;
// const API_URL = import.meta.env.VITE_API_URL;
// const VITE_gdev219_CLIENT_ID = import.meta.env.VITE_gdev219_CLIENT_ID;

export interface MockAPIResponse<T> {
  data: T;
}

export const mockAxios = function <T>(response: T, delay = 300, isPublic = false): Promise<MockAPIResponse<T>> {
  const { tokens } = useBoundStore.getState();
  console.log('call', tokens.accessToken);
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      if (tokens.accessToken === '1' || isPublic) resolve({ data: response });
      else reject(new Error('x'));
    }, delay),
  );
};

// const axiosInstance = axios.create({
//   headers: {
//     'X-Client-Id': VITE_gdev219_CLIENT_ID,
//   },
// });
// axiosInstance.defaults.withCredentials = true;
// axiosInstance.defaults.headers['Authorization'] = `Bearer ${tokens.accessToken}`;
// axiosInstance.defaults.headers['refresh-token'] = `${tokens.refreshToken}`;

// if (mode !== 'development') axiosInstance.defaults.baseURL = API_URL;

// axiosInstance.interceptors.response.use(
//   function (response) {
//     const headers = response.headers;
//     const accessToken = headers['authorization']?.replace('Bearer ', '');
//     if (accessToken) {
//       useBoundStore.setState({ tokens: { ...tokens, accessToken } });
//       axiosInstance.defaults.headers['Authorization'] = `Bearer ${accessToken}`;
//     }
//     return response;
//   },
//   function (error) {
//     return Promise.reject(error);
//   },
// );

// export default axiosInstance;
