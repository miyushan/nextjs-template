import NextAuth, { DefaultSession } from 'next-auth';

declare module 'next-auth/jwt' {
  interface JWT {
    name: string | null | undefined;
    email: string | null | undefined;
  }
}

declare module 'next-auth' {
  interface User {}

  interface Session {
    user: {
      name: string | null | undefined;
      email: string | null | undefined;
    } & DefaultSession['user'];
  }
}
