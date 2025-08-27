"use client";
import React, { useState } from "react";
import CategoryCard from "./components/CategoryCard";
export const categories = [
  {
    id: 1,
    name: "Most Talented",
    candidates: {
      1: {
        id: 1,
        name: "Assumpta Chijioke",
        imageurl: "/candidates/candidate.jpg",
      },
      2: {
        id: 2,
        name: "John Doe",
        imageurl: "/candidates/candidate2.jpg",
      },
    },
  },
];

const page = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center mx-3 font-sans pt-7 gap">
        <h2 className="text-lg font-light lg:text-2xl ">NOX AMORIS AWARDS</h2>
        <h2 className="text-lg lg:text-3xl font-extrabold text-[#2E7D32]">
          YOU MAY CAST YOUR VOTES!
        </h2>
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
        <button className="bg-(--primary) text-sm md:text-xl text-(--secondary) h-10 lg:h-10 w-full rounded-xl  font-bold ">
          Submit Votes
        </button>
      </div>
    </div>
  );
};

export default page;
