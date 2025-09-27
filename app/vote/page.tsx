"use client";
import React, { useEffect, useMemo, useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

// Map of categoryId -> candidateId
type SelectionMap = Record<string, string>;

const Page = () => {
  const [selectedCandidates, setSelectedCandidates] = useState<SelectionMap>({});
  const [prevVotes, setPrevVotes] = useState<SelectionMap>({})
  const [categories, setCategories] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const [submitting, setSubmitting] = useState(false);

  const router = useRouter();

  const fetchCanidates = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/candidates`, {
        headers: {
          'Content-Type': 'application/json',
        },
        method: "GET",
        credentials: 'include'
      })

      const cat = await res.json()

      if (cat.status != 'success') {
        setCategories([]);
        return;
      }
      setCategories(cat.data);

      cat.data.map((category: any) => {
        if (category.votes[0]) {
          handleCandidateSelect(category.id, category.votes[0].candidateId, true)
        }
      })

      console.log({ cat })
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCanidates();
  }, []);

  const handleCandidateSelect = (categoryId: string, candidateId: string, isPrevVote = false) => {
    if (isPrevVote) {
      setPrevVotes((prev) => ({ ...prev, [categoryId]: candidateId }));
    }
    else {
      setSelectedCandidates((prev) => ({ ...prev, [categoryId]: candidateId }));
    }
  };

  const handleVoteSubmission = async () => {
    try {
      setSubmitting(true);
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/vote`, {
        headers: {
          'Content-Type': 'application/json',
        },
        method: "POST",
        body: JSON.stringify({
          data: selectedCandidates,
        }),
        credentials: 'include'
      });

      const response = await res.json()

      console.log({ response });

      if (response.status == "success") {
        toast.success(response.message || "Your votes have been submitted successfully.")
        router.push("/")
        return;
      }

      if (response.code == 401) {
        toast.error("Please verify your email first");
        router.push("/")
        return;
      }

      toast.error(response.message || "An error occurred while processing your request.");
    } finally {
      setSubmitting(false);
    }
  };

  const preventVoteChange = () => {
    toast.error("You cannot change your previous votes")
  }

  const selectedCount = useMemo(
    () => Object.keys(selectedCandidates).length,
    [selectedCandidates]
  );
  const totalCategories = useMemo(() => categories.length, [categories]);
  const hasAnyCandidates = useMemo(
    () => categories.some((c: any) => Object.values(c?.candidates || {}).length > 0),
    [categories]
  );

  const renderSkeleton = () => (
    <ul className="space-y-8">
      {Array.from({ length: 4 }).map((_, idx) => (
        <li
          key={idx}
          className="p-6 rounded-2xl border border-slate-200/60 bg-white/70 shadow-sm backdrop-blur-sm"
        >
          <div className="h-5 w-56 rounded bg-slate-200 animate-pulse" />
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {Array.from({ length: 4 }).map((__, i2) => (
              <div
                key={i2}
                className="h-40 rounded-2xl border border-slate-200 bg-slate-100 animate-pulse"
              />
            ))}
          </div>
        </li>
      ))}
    </ul>
  );

  const renderEmptyState = () => (
    <div className="flex items-center justify-center py-16">
      <div className="text-center max-w-md">
        <div className="mx-auto h-16 w-16 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shadow-sm">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
            <path fillRule="evenodd" d="M4.5 6.75A2.25 2.25 0 0 1 6.75 4.5h10.5a2.25 2.25 0 0 1 2.25 2.25v10.5A2.25 2.25 0 0 1 17.25 19.5H6.75A2.25 2.25 0 0 1 4.5 17.25V6.75Zm9.53 3.97a.75.75 0 1 0-1.06-1.06L10.5 12.13l-.97-.97a.75.75 0 1 0-1.06 1.06l1.5 1.5a.75.75 0 0 0 1.06 0l2.999-2.999Z" clipRule="evenodd" />
          </svg>
        </div>
        <h3 className="mt-4 text-lg font-semibold text-slate-800">No categories to vote on yet</h3>
        <p className="mt-2 text-slate-600 text-sm">Please check back later or refresh to try again.</p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <button
            onClick={fetchCanidates}
            className="inline-flex items-center px-4 py-2 rounded-lg bg-emerald-600 text-white text-sm font-medium hover:bg-emerald-700 shadow"
          >
            Refresh
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100">
      <div className="mb-10 py-5 text-center">
        <h2 className="text-md font-bold text-gray-700 lg:text-2xl">
          NOX AMORIS AWARDS
        </h2>
        <h1 className="mt-2 text-xl font-extrabold text-green-700 lg:text-3xl">
          YOU MAY CAST YOUR VOTES!
        </h1>
      </div>

      <main className="px-4 pb-28 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-6xl">
          {/* Info banner */}
          <div className="mb-8 rounded-xl border border-emerald-100 bg-emerald-50 text-emerald-700 px-4 py-3 text-sm">
            Tip: Click a candidate to select. A green ring indicates your pick for that category.
          </div>

          {loading ? (
            renderSkeleton()
          ) : categories.length === 0 || !hasAnyCandidates ? (
            renderEmptyState()
          ) : (
            <ul className="space-y-10">
              {categories.map((category: any) => (
                <li
                  key={category.id}
                  className="p-6 rounded-2xl border border-slate-200/60 bg-white/80 shadow-sm hover:shadow-md transition-shadow backdrop-blur-sm"
                >
                  <div className="flex items-center justify-between gap-4">
                    <h2 className="text-lg sm:text-xl font-bold text-slate-800">
                      {category.name}
                    </h2>
                    <span className="inline-flex items-center rounded-full bg-slate-100 text-slate-600 text-xs px-3 py-1 border border-slate-200">
                      Category
                    </span>
                  </div>

                  <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {Object.values(category.candidates).map((candidate: any) => {
                      const isSelected = selectedCandidates[category.id] === candidate.id || prevVotes[category.id] == candidate.id;
                      return (
                        <button
                          key={candidate.id}
                          type="button"
                          onClick={() =>
                            prevVotes[category.id] ? preventVoteChange() : handleCandidateSelect(category.id, candidate.id)
                          }
                          className={`group relative rounded-2xl border transition-all text-left bg-white/70 backdrop-blur hover:shadow-md focus:outline-none ${isSelected
                            ? "border-emerald-500 ring-2 ring-emerald-400/60"
                            : "border-slate-200 hover:border-slate-300"
                            }`}
                        >
                          {/* Checkmark badge when selected */}
                          {(isSelected) && (
                            <span className="absolute right-2 top-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500 text-white shadow">
                              {/* Check Icon */}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="h-4 w-4"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.527-1.61-1.61a.75.75 0 1 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.736-5.26Z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </span>
                          )}

                          <div className="p-4 flex flex-col items-center">
                            <div className="relative">
                              <div className={`rounded-full p-1 ${isSelected
                                ? "ring-2 ring-emerald-400/60"
                                : "ring-1 ring-slate-200"
                                }`}
                              >
                                <img
                                  src={candidate.image || "/placeholder.png"}
                                  alt={candidate.name}
                                  width={112}
                                  height={112}
                                  className="h-24 w-24 lg:h-28 lg:w-28 rounded-full object-cover shadow-sm"
                                />
                              </div>
                            </div>
                            <h6 className="mt-3 text-sm font-medium text-center text-slate-800 lg:text-base">
                              {candidate.name}
                            </h6>
                            <p className="mt-0.5 text-xs text-slate-500 group-hover:text-slate-600">
                              Click to select
                            </p>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>

      {categories.length > 0 && hasAnyCandidates && (
        <div className="fixed bottom-0 inset-x-0 z-10">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10 pb-5">
            <div className="rounded-2xl border border-slate-200 bg-white/80 backdrop-blur p-4 shadow-sm">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="text-sm text-slate-600">
                  Selected <span className="font-semibold text-slate-800">{selectedCount}</span> of
                  <span className="font-semibold text-slate-800"> {totalCategories}</span> categories
                </div>
                <button
                  className="w-full cursor-pointer sm:w-auto inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-white bg-emerald-600 rounded-xl shadow hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed"
                  onClick={() => handleVoteSubmission()}
                  disabled={selectedCount === 0 || submitting}
                  aria-disabled={selectedCount === 0 || submitting}
                >
                  {submitting ? (
                    <span className="inline-flex items-center gap-2">
                      <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                      </svg>
                      Submitting...
                    </span>
                  ) : (
                    'Submit Votes'
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;