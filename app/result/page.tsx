import React from "react";
import { allResults, type ResultCategory } from "@/actions/vote";
import { toast } from "react-toastify";

function EmptyState() {
    return (
        <div className="flex items-center justify-center py-16">
            <div className="text-center max-w-md">
                <div className="mx-auto h-16 w-16 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
                        <path fillRule="evenodd" d="M4.5 6.75A2.25 2.25 0 0 1 6.75 4.5h10.5a2.25 2.25 0 0 1 2.25 2.25v10.5A2.25 2.25 0 0 1 17.25 19.5H6.75A2.25 2.25 0 0 1 4.5 17.25V6.75Zm9.53 3.97a.75.75 0 1 0-1.06-1.06L10.5 12.13l-.97-.97a.75.75 0 1 0-1.06 1.06l1.5 1.5a.75.75 0 0 0 1.06 0l2.999-2.999Z" clipRule="evenodd" />
                    </svg>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-800">No results to display yet</h3>
                <p className="mt-2 text-slate-600 text-sm">Results will appear once votes are cast and tallied.</p>
            </div>
        </div>
    );
}

function CategoryCard({ category }: { category: ResultCategory }) {
    const totalVotes = category.candidates.reduce((sum, c) => sum + (c.votes || 0), 0);
    const maxVotes = Math.max(0, ...category.candidates.map((c) => c.votes || 0));
    const winners = new Set(
        category.candidates
            .filter((c) => (c.votes || 0) === maxVotes && maxVotes > 0)
            .map((c) => c.id)
    );
    const sortedCandidates = [...category.candidates].sort((a, b) => (b.votes || 0) - (a.votes || 0));

    return (
        <li className="p-6 rounded-2xl border border-slate-200/60 bg-white/80 shadow-sm hover:shadow-md transition-shadow backdrop-blur-sm">
            <div className="flex items-center justify-between gap-4">
                <h2 className="text-lg sm:text-xl font-bold text-slate-800">{category.name}</h2>
                <span className="inline-flex items-center rounded-full bg-slate-100 text-slate-600 text-xs px-3 py-1 border border-slate-200">
                    Total votes: <span className="ml-1 font-semibold text-slate-800">{totalVotes}</span>
                </span>
            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {sortedCandidates.map((candidate, idx) => {
                    const votes = candidate.votes || 0;
                    const pct = totalVotes > 0 ? Math.round((votes / totalVotes) * 100) : 0;
                    const isWinner = winners.has(candidate.id);
                    return (
                        <div
                            key={candidate.id}
                            className={`relative rounded-2xl border bg-white/70 backdrop-blur p-4 transition-all ${isWinner ? "border-emerald-500 ring-1 ring-emerald-400/50" : "border-slate-200"
                                }`}
                        >
                            {isWinner && (
                                <span className="absolute right-2 top-2 inline-flex items-center gap-1 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-200 px-2 py-0.5 text-xs font-semibold">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                                        <path fillRule="evenodd" d="M2.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75 2.25 17.385 2.25 12Zm12.66-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.527-1.61-1.61a.75.75 0 1 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.736-5.26Z" clipRule="evenodd" />
                                    </svg>
                                    Winner
                                </span>
                            )}

                            <div className="flex items-center gap-4">
                                <div className={`rounded-full p-0.5 ${isWinner ? "ring-2 ring-emerald-400/60" : "ring-1 ring-slate-200"}`}>
                                    <img
                                        src={candidate.image || "/placeholder.png"}
                                        alt={candidate.name}
                                        width={64}
                                        height={64}
                                        className="h-16 w-16 rounded-full object-cover shadow-sm"
                                    />
                                </div>
                                <div className="min-w-0 flex-1">
                                    <div className="flex items-center justify-between gap-3">
                                        <div className="truncate">
                                            <p className="text-sm font-semibold text-slate-800 truncate">{idx + 1}. {candidate.name}</p>
                                            <p className="text-xs text-slate-500">{votes} votes • {pct}%</p>
                                        </div>
                                    </div>
                                    {/* Progress bar */}
                                    <div className="mt-2 h-2 w-full rounded-full bg-slate-100 border border-slate-200 overflow-hidden">
                                        <div
                                            className={`h-full rounded-full ${isWinner ? "bg-emerald-500" : "bg-slate-300"}`}
                                            style={{ width: `${pct}%` }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {totalVotes === 0 && (
                <p className="mt-4 text-xs text-slate-500">No votes have been recorded for this category yet.</p>
            )}
        </li>
    );
}

export default async function ResultPage() {

    const response = await allResults()

    if (response.code == 401) {
        toast.error("Unauthorized access. Please login as admin.");
        window.location.href = '/'

        return <EmptyState />
    }

    const categories = response.data as ResultCategory[];
    const hasAnyCandidates = categories.some((c) => (c.candidates?.length || 0) > 0);


    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100">
            <div className="mb-8 py-5 text-center">
                <h2 className="text-md font-bold text-gray-700 lg:text-2xl">NOX AMORIS AWARDS</h2>
                <h1 className="mt-2 text-xl font-extrabold text-green-700 lg:text-3xl">VOTING RESULTS</h1>
                <p className="mt-2 text-slate-600 text-sm">Category-wise breakdown with vote counts and percentages.</p>
            </div>

            <main className="px-4 pb-10 sm:px-6 lg:px-10">
                <div className="mx-auto max-w-6xl">
                    {!hasAnyCandidates ? (
                        <EmptyState />
                    ) : (
                        <ul className="space-y-10">
                            {categories.map((category) => (
                                <CategoryCard key={category.id} category={category} />
                            ))}
                        </ul>
                    )}
                </div>
            </main>
        </div>
    );
}