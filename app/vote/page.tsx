"use client";
import React, { useState } from "react";
import categories from "@/data/nomination_categories.json";

interface SelectedCandidates {
  [categoryId: string]: number;
}

const Page = () => {
  const [votes, setVotes] = useState<number[]>([]);
  const [selectedCandidates, setSelectedCandidates] =
    useState<SelectedCandidates>({});

  const handleCandidateSelect = (categoryName: string, candidateId: number) => {
    setSelectedCandidates((prev) => ({
      ...prev,
      [categoryName]: candidateId,
    }));

    setVotes((prevVotes) => [...prevVotes, candidateId]);
  };

  const handleVoteSubmission = async (votes: SelectedCandidates) => {
    fetch("/api/submit-vote", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(votes),
    });
    console.log(votes);
  };

  return (
    <div className="min-h-screen px-4 py-8 font-sans bg-gray-50 lg:px-10">
      <div className="mb-10 text-center">
        <h2 className="text-lg font-light text-gray-700 lg:text-2xl">
          NOX AMORIS AWARDS
        </h2>
        <h1 className="mt-2 text-xl font-extrabold text-green-700 lg:text-3xl">
          YOU MAY CAST YOUR VOTES!
        </h1>
      </div>

      <ul className="space-y-10">
        {categories.map((category) => (
          <li
            key={category.id}
            className="p-6 transition bg-white shadow-md rounded-2xl hover:shadow-lg"
          >
            <h1 className="mb-6 text-lg font-bold text-center text-gray-800">
              {category.name}
            </h1>

            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
              {Object.values(category.candidates).map((candidate) => (
                <div
                  key={candidate.id}
                  onClick={() =>
                    handleCandidateSelect(category.name, candidate.id)
                  }
                  className={`cursor-pointer rounded-2xl border-2 transition transform hover:scale-105 p-4 flex flex-col items-center ${
                    selectedCandidates[category.name] === candidate.id
                      ? "border-green-600 ring-4 ring-green-200"
                      : "border-gray-200 hover:border-green-400"
                  }`}
                >
                  <img
                    src={candidate.imageurl || "/placeholder.png"}
                    alt={candidate.name}
                    className="object-cover w-24 h-24 rounded-full shadow-md lg:h-32 lg:w-32"
                  />
                  <h6 className="mt-3 text-sm font-medium text-center text-gray-700 lg:text-base">
                    {candidate.name}
                  </h6>
                </div>
              ))}
            </div>
          </li>
        ))}
      </ul>

      <div className="flex justify-center mt-12">
        <button
          className="px-8 py-3 text-lg font-semibold text-white transition bg-green-600 shadow-md rounded-xl hover:bg-green-700 disabled:opacity-50"
          onClick={() => handleVoteSubmission(selectedCandidates)}
          disabled={Object.keys(selectedCandidates).length === 0}
        >
          Submit Votes
        </button>
      </div>
    </div>
  );
};

export default Page;
