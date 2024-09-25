"use client";
import AdminDatabase from "@/components/AdminDatabase";
import AdminGrade from "@/components/AdminGrade";
import { RedirectToSignIn, SignedIn, SignedOut, useUser } from "@clerk/nextjs";
import "tailwindcss/tailwind.css";

function App() {
  const { user } = useUser();

  return (
    <>
      <SignedIn>
        {user?.id === "" || user?.id === "" ? (
          <div className="max-w-5xl m-auto">
            <AdminGrade />
            <AdminDatabase />
          </div>
        ) : (
          <h2>Only Authorized</h2>
        )}
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
}

export default App;
