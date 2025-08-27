"use client";
import React from "react";
import CandidateCard from "./CandidateCard";
import { useState } from "react";

interface CategoryCardProps {
  category: {
    id: number;
    name: string;
    candidates: {
      [key: number]: {
        id: number;
        name: string;
        imageurl: string;
      };
    };
  };
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  const [selectedCandidate, setSelectedCandidate] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center w-full my-7">
      <h1 className="font-bold">{category.name}</h1>
      <div className="flex flex-wrap items-center justify-center h-full gap-4 mt-2 lg:mt-7 lg:gap-4">
        {Object.values(category.candidates).map((candidate, index) => (
          <div
            key={index}
            onClick={() => {
              setSelectedCandidate(() => index);
            }}
            className={` ${
              selectedCandidate === index
                ? "ring-2 ring-red-400 rounded-lg"
                : "ring-1 ring-(--primary) rounded-lg"
            }`}
          >
            <CandidateCard
              name={candidate.name}
              imageUrl={candidate.imageurl}
              selected={selectedCandidate}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

// export default CategoryCard;

//     </div>
//   );
// };

export default CategoryCard;
