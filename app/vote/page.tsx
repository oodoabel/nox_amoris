"use client";
import React, { useEffect, useMemo, useState } from "react";
import { allCategories, vote } from "@/actions/vote";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

// Map of categoryId -> candidateId
type SelectionMap = Record<string, string>;

const Page = () => {
  const [selectedCandidates, setSelectedCandidates] = useState<SelectionMap>({});
  const [categories, setCategories] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const router = useRouter();

  const fetchCanidates = async () => {
    try {
      setLoading(true);
      const cat = await allCategories();
      if (!cat) {
        setCategories([]);
        return;
      }
      setCategories(cat);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCanidates();
  }, []);

  const handleCandidateSelect = (categoryId: string, candidateId: string) => {
    setSelectedCandidates((prev) => ({ ...prev, [categoryId]: candidateId }));
  };

  const handleVoteSubmission = async () => {
    const response = await vote("cmfsk694e0001pl8ow07h6fq6", selectedCandidates);
    console.log({ response });

    if (response.status == "success") {
      toast.success(response.message || "Your votes have been submitted successfully.")
      router.push("/")
      return;
    }

    toast.error(response.message || "An error occurred while processing your request.");
  };

  const selectedCount = useMemo(
    () => Object.keys(selectedCandidates).length,
    [selectedCandidates]
  );
  const totalCategories = useMemo(() => categories.length, [categories]);

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

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100">
      {/* Header */}
      <header className="px-4 pt-10 pb-4 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-sm tracking-wide text-slate-500">
            NOX AMORIS AWARDS
          </p>
          <h1 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-green-500">
            Cast Your Votes
          </h1>
          <p className="mt-2 text-slate-600 max-w-2xl mx-auto">
            Select one candidate per category. Your selections are highlighted, and you can change them anytime before submitting.
          </p>
        </div>
      </header>

      {/* Content */}
      <main className="px-4 pb-28 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-6xl">
          {/* Info banner */}
          <div className="mb-8 rounded-xl border border-emerald-100 bg-emerald-50 text-emerald-700 px-4 py-3 text-sm">
            Tip: Click a candidate to select. A green ring indicates your pick for that category.
          </div>

          {loading ? (
            renderSkeleton()
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
                      const isSelected = selectedCandidates[category.id] === candidate.id;
                      return (
                        <button
                          key={candidate.id}
                          type="button"
                          onClick={() =>
                            handleCandidateSelect(category.id, candidate.id)
                          }
                          className={`group relative rounded-2xl border transition-all text-left bg-white/70 backdrop-blur hover:shadow-md focus:outline-none ${isSelected
                            ? "border-emerald-500 ring-2 ring-emerald-400/60"
                            : "border-slate-200 hover:border-slate-300"
                            }`}
                        >
                          {/* Checkmark badge when selected */}
                          {isSelected && (
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

      {/* Sticky submit bar */}
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
                disabled={selectedCount === 0}
                aria-disabled={selectedCount === 0}
              >
                Submit Votes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;