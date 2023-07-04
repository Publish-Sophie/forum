import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

const { GITHUB_ID, GITHUB_SECRET, NEXTAUTH_SECRET } = process.env;

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: GITHUB_ID,
      clientSecret: GITHUB_SECRET,
    }),
  ],
  secret: NEXTAUTH_SECRET,
};
export default NextAuth(authOptions);
