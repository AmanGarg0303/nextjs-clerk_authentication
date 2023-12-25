import { currentUser, useUser } from "@clerk/nextjs";

// currentUser for server components
// useUser for client components

export default async function Home() {
  const user = await currentUser();
  // console.log(user);

  return (
    <div>
      <h1>Learning Clerk Authentication</h1>
    </div>
  );
}
