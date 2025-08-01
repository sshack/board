This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, set up the environment variables:

1. Copy the `.env.example` file to `.env.local`
2. Replace the Clerk placeholder values with your actual Clerk API keys

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Authentication

This project uses [Clerk](https://clerk.com) for authentication. Clerk provides:

- Secure authentication with OAuth providers and email/password
- Automated token refresh
- Route protection via middleware
- User management

Key authentication files:

- `src/middleware.ts` - protects routes
- `src/layouts/PrivateLayout.tsx` - ensures users are authenticated to access private routes
- `src/contexts/auth/AuthContext.tsx` - provides user data to components
- `src/app/auth/sign-in/page.tsx` and `src/app/auth/sign-up/page.tsx` - authentication UI

Patient authentication uses a separate flow and is not handled by Clerk.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.
