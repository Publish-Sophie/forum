import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
const {
  REACT_APP_API_AUTH_ID,
  REACT_APP_API_AUTH_PW,
  REACT_APP_API_AUTH_SECRET,
} = process.env;

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: REACT_APP_API_AUTH_ID,
      clientSecret: REACT_APP_API_AUTH_PW,
    }),
  ],
  secret: REACT_APP_API_AUTH_SECRET,
};
export default NextAuth(authOptions);
