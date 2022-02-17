export const getIsLoggedIn = state => state?.auth?.isLoggedIn;
export const tokenCurrentUser = state => state.auth.token;
export const getBalanceUser = state => state?.auth?.user?.balance;
export const mailCurrentUser = state => state?.auth.user.user.email;
export const isFetchingUser = state => state.auth.isFetchingUser;

const authSelectors = {
  getIsLoggedIn,
  getBalanceUser,
  tokenCurrentUser,
  mailCurrentUser,
  isFetchingUser,
};

export default authSelectors;
