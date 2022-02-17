export const getIsLoggedIn = state => state.auth.isLoggedIn;
export const tokenCurrentUser = state => state.auth.token;
export const getBalanceUser = state => state.auth.user.balance;
export const mailCurrentUser = state => state.auth.user.email;

const authSelectors = {
  getIsLoggedIn,
  getBalanceUser,
  tokenCurrentUser,
  mailCurrentUser,
};

export default authSelectors;
