"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const LoginPage = () => {
  const router = useRouter();

  const [email, setEmail] = useState<string>("");
  const [isVerified, setIsVerified] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleVerifyEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsLoading(true);

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/verify`, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: "POST",
      body: JSON.stringify({
        email,
      }),
      credentials: 'include'
    });

    if (res.ok) {
      const verify = await res.json();

      if (verify.res.status == "success") {
        setIsVerified(true);

        window.localStorage.setItem('session', verify.res.data.id)

        toast.success("Email verified, redirectng...");
        goToVotePage();
      } else {
        toast.error(await verify.res.message || "Failed to verify email");
        console.log({ error: verify.res.message });
      }

      setIsLoading(false);
    }

    else {
      setIsVerified(false)
      toast.error("Failed to verify email");
    }
  };

  const goToVotePage = () => {
    router.push("/vote");
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4 bg-gradient-to-tr from-(--primary) via-(--secondary)  to-(--tertiary)">
      <div className="w-full max-w-lg p-8 bg-white shadow-xl bg-opacity-90 rounded-3xl">
        <h1 className="mb-4 text-3xl font-bold text-center text-gray-900 select-none"></h1>
        <p className="mb-8 text-center text-gray-700 select-none">
          Please enter your email you registered in the NFCS Bio-Data form
        </p>
        <form onSubmit={handleVerifyEmail}>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full p-3 mb-6 transition border border-gray-300 rounded-xl focus:outline-none focus:ring-1 focus:ring-(--primary)/30 select-none"
          />
          <button
            onClick={handleVerifyEmail}
            disabled={isLoading}
            className="w-full py-3 cursor-pointer font-semibold text-white transition bg-(--primary) shadow-md hover:bg-(--primary)/80 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl"
          >
            {isLoading ? "Verifying..." : "Verify Email"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
