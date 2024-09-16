"use client";

import { useToast } from "@/hooks/use-toast";
import { SignOutButton } from "@clerk/nextjs";
import React from "react";

function SignOutLink() {
  const { toast } = useToast();
  const handleLogout = () => {
    toast({ description: "You have been sign out." });
  };

  return (
    <SignOutButton redirectUrl="/">
      <button
        className="2-full
         text-left"
        onClick={handleLogout}
      >
        Logout
      </button>
    </SignOutButton>
  );
}

export default SignOutLink;
