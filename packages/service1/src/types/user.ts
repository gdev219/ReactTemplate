export interface ITokens {
  accessToken: string | null;
  refreshToken: string | null;
}

export interface IAuth {
  isLoggedIn: boolean;
}
export interface IUser {
  userId: string;
  nickname: string;
}
