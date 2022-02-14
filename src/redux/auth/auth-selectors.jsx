export const getIsLoggedIn = state => state.auth.isLoggedIn;
export const tokenCurrentUser = state => state.auth.token;
export const getBalanceUser = state => state.auth.user.balance;

const authSelectors = {
  getIsLoggedIn,
  getBalanceUser,
  tokenCurrentUser,
};

export default authSelectors;
