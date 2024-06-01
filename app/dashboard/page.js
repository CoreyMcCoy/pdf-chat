import { currentUser } from '@clerk/nextjs/server';

export default async function page() {
  const user = await currentUser(); // Server-side hook for accessing user information

  return (
    <>
      <div className="text-center mb-20">
        <h1 className="text-2xl font-semibold mb-3">Dashboard (protected)</h1>
        <p>Welcome back, {user.username}!</p>
      </div>
    </>
  );
}
