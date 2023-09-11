import { mockAxios } from '..';

export type User = {
  nickname: string;
};

const FETCH_USER = () => {
  return mockAxios<User>({ nickname: 'John Doe' }, 1000);
};

export { FETCH_USER };
