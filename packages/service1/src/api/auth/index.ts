import { mockAxios } from '..';

type RequestFetchLogin = {
  userId: string;
  userPassword: string;
};

type ResponseTokens = {
  accessToken: string;
  refreshToken: string;
};
// const VITE_gdev219_CLIENT_ID = import.meta.env.VITE_gdev219_CLIENT_ID;
// const API_URL = import.meta.env.VITE_API_URL;
const FETCH_LOGIN = (params: RequestFetchLogin) => {
  console.log(params);
  return mockAxios<ResponseTokens>({ accessToken: '1', refreshToken: '2' }, 1000, true);
};

const FETCH_LOGOUT = () => {
  return mockAxios<boolean>(true);
};

export { FETCH_LOGIN, FETCH_LOGOUT };
