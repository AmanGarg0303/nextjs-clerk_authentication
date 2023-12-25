import Link from "next/link";
import { UserButton, auth, useAuth } from "@clerk/nextjs";

// auth is used for server components
// useAuth is used for client components

export default async function Navbar() {
  const { userId } = auth();
  const isAuth = !!userId;

  return (
    <div>
      <ul className="flex justify-between m-10 items-center">
        <div>
          <Link href="/">
            <li>Home</li>
          </Link>
        </div>

        <div className="flex gap-10">
          {!isAuth ? (
            <>
              <Link href="/sign-in">
                <li>Login</li>
              </Link>
              <Link href="/sign-up">
                <li>Signup</li>
              </Link>
            </>
          ) : (
            <>
              <Link href="/profile">
                <li>Profile</li>
              </Link>
              <li>
                <UserButton afterSignOutUrl="/" />
              </li>
            </>
          )}
        </div>
      </ul>
    </div>
  );
}
