type UserSlice = {
  user: IUser;
  getIsLoggedIn: () => boolean;
};

type TokenSlice = {
  tokens: ITokens;
  updateTokens: (tokens: ITokens) => void;
  updateAccessToken: () => void;
  updateRefreshToken: () => void;
  removeTokens: () => void;
};

type GlobalState = UserSlice & TokenSlice;
