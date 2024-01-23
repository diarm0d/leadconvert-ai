import { SignIn, SignInButton, UserButton, currentUser } from "@clerk/nextjs";
import { User } from "@clerk/nextjs/api";
import React from "react";
import Link from "next/link";
import { Button } from "@components/ui/button";

const LandingPageNavBar = async () => {
  const user: User | null = await currentUser();

  console.log(user);
  return (
    <nav className="flex w-screen items-center justify-between p-6">
      <div>
        <Link
          className="text-2xl font-bold text-purple-500 no-underline"
          href="/"
        >
          LeadConvert
        </Link>
      </div>
      <div className="text-purple-500 font-semibold text-lg">
        {user ? (
          <div className="flex flex-row gap-x-4 items-center">
            <Link href="/lead-magnets">
              <Button variant="outline">Open App</Button>
            </Link>
            <UserButton />
          </div>
        ) : (
          <SignInButton />
        )}
      </div>
    </nav>
  );
};

export default LandingPageNavBar;
