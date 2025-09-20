"use client";
import { Email, verifyEmail } from "@/actions/auth";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export const useVerification = () => {
  const [verified, setVerified] = useState<boolean | null>(null);
  return { verified, setVerified };
};

const LoginPage = () => {
  const router = useRouter();

  const [email, setEmail] = useState<Email>();
  const [isVerified, setIsVerified] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleVerifyEmail = async () => {
    setIsLoading(true);

    const verify = await verifyEmail(email!)
    if (verify.status == "success") {
      setIsVerified(true)
    }

    setIsLoading(false);
  };

  const goToVotePage = () => {
    router.push("/vote");
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4 bg-gradient-to-tr from-(--primary) via-(--secondary)  to-(--tertiary)">
      <div className="w-full max-w-lg p-8 bg-white shadow-xl bg-opacity-90 rounded-3xl">
        <h1 className="mb-4 text-3xl font-bold text-center text-gray-900 select-none">
          Login Page
        </h1>
        <p className="mb-8 text-center text-gray-700 select-none">
          Please enter your email you registered in the NFCS Bio-Data form
        </p>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full p-3 mb-6 transition border border-gray-300 rounded-xl focus:outline-none focus:ring-1 focus:ring-(--primary)/30 select-none"
        />
        <button
          onClick={handleVerifyEmail}
          disabled={isLoading}
          className="w-full py-3 font-semibold text-white transition bg-(--primary) shadow-md hover:bg-(--primary)/80 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl"
        >
          {isLoading ? "Verifying..." : "Verify Email"}
        </button>
        {isVerified !== null && (
          <p
            className={`mt-8 text-center text-lg font-medium ${isVerified ? "text-green-600" : "text-red-600"
              } select-none`}
          >
            Email is {isVerified ? "valid" : "invalid"}.
          </p>
        )}
        {isVerified && (
          <p
            className="mt-4 text-center text-gray-600 hover:underline"
            onClick={() => {
              goToVotePage();
            }}
          >
            <span>Proceed to vote &rarr;</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
