"use client";
import React, { useState } from "react";
import CandidateCard from "./components/CandidateCard";

export const categories = [
  {
    id: 1,
    name: "Most Handsome (GK)",
    candidates: {
      1: {
        id: 1,
        name: "Nwakuche Emmanuel",
        imageurl:
          "https://drive.google.com/thumbnail?id=1V4SCrcdBEhyk2swWSOZTBPt1XiVdMprN",
      },
      2: {
        id: 2,
        name: "Victor Oluwatimileyin Adeboye",
        imageurl:
          "https://drive.google.com/thumbnail?id=19bGiwjHl7j0qEMvIWxUw4q0tkgDYX5hJ",
      },
    },
  },
  {
    id: 2,
    name: "Most Handsome (Bosso)",
    candidates: {
      1: {
        id: 1,
        name: "Abutu Emmanuel Agaba",
        imageurl:
          "https://drive.google.com/thumbnail?id=1jW0ERzeXWP740nqge3WQuz_yZcAPuqAW",
      },
    },
  },
  {
    id: 3,
    name: "Most Beautiful (GK)",
    candidates: {
      1: {
        id: 1,
        name: "GODWIN JOVITA CHIAMAKA",
        imageurl:
          "https://drive.google.com/thumbnail?id=1p2jylo3HSpM5ebJKfYk57yISUeHNzWCt",
      },
      2: {
        id: 2,
        name: "Francis Doris Ojone",
        imageurl:
          "https://drive.google.com/thumbnail?id=1yUoToTgQlF4-j0oSN5qQmXHcXmNXOKnU",
      },
      3: {
        id: 3,
        name: "Naze Seember Cecilia",
        imageurl:
          "https://drive.google.com/thumbnail?id=117ziims0BFnKXtnBR3YaV44s9KILve4T",
      },
      4: {
        id: 4,
        name: "Uwakwe Joy Chisom",
        imageurl:
          "https://drive.google.com/thumbnail?id=1FQ-AVZRVWH57xDBFdtXAjViBVQK2aGYa",
      },
      5: {
        id: 5,
        name: "Happiness Simon",
        imageurl:
          "https://drive.google.com/thumbnail?id=1zi0N58JoKCbF3j0r689sVsZYSzlyg7bX",
      },
    },
  },
  {
    id: 4,
    name: "Most Beautiful (Bosso)",
    candidates: {
      1: {
        id: 1,
        name: "Esther Benjamin",
        imageurl:
          "https://drive.google.com/thumbnail?id=1ggV5X0DZnBCBs-X6gwkdtjBqkwUxuCu5",
      },
    },
  },
  {
    id: 5,
    name: "Most Intellectual (GK)",
    candidates: {
      1: {
        id: 1,
        name: "Obute ladi",
        imageurl:
          "https://drive.google.com/thumbnail?id=1H6UH2RquUqiuhpGgIhN9HLrIPaINgyHJ",
      },
      2: {
        id: 2,
        name: "Uchebueze Ebuka",
        imageurl:
          "https://drive.google.com/thumbnail?id=1XnsNBcCT6xHiFyfjRHpfKKtuh_8z5D4g",
      },
    },
  },
  {
    id: 6,
    name: "Most Intellectual (Bosso)",
    candidates: {
      1: {
        id: 1,
        name: "Okeh Francis Chimaroke",
        imageurl:
          "https://drive.google.com/thumbnail?id=1d_2YiVNRSUp3RpuOWn-fgwOnbL4MCd3N",
      },
    },
  },
  {
    id: 7,
    name: "Most Social",
    candidates: {
      1: {
        id: 1,
        name: "Ameh Regina Gracious",
        imageurl:
          "https://drive.google.com/thumbnail?id=1lBHkwz6PN2Bt5wqkvnXneSK7EeDWe3VR",
      },
      2: {
        id: 2,
        name: "Francis Esther Ugbedeojo",
        imageurl:
          "https://drive.google.com/thumbnail?id=1E76LQgguEHav29V2mwAenAmRegrbC_ry",
      },
      3: {
        id: 3,
        name: "Abakpa Emmanuel Emzzil",
        imageurl:
          "https://drive.google.com/thumbnail?id=1Y3bXzWkbIfzqdx2SFSqNJPA6zL4WELRp",
      },
      4: {
        id: 4,
        name: "Onipe John Adeiza Martin",
        imageurl:
          "https://drive.google.com/thumbnail?id=1wPJz4IWA24mIE-Vje5_rvo04r-n1FX3S",
      },
    },
  },
  {
    id: 8,
    name: "Entrepreneur of the Year (GK)",
    candidates: {
      1: {
        id: 1,
        name: "Uwakwe Joy Chisom",
        imageurl:
          "https://drive.google.com/thumbnail?id=1FQ-AVZRVWH57xDBFdtXAjViBVQK2aGYa",
      },
      2: {
        id: 2,
        name: "Sabastine Ngohile Felicia",
        imageurl:
          "https://drive.google.com/thumbnail?id=1WVh6cQZ8VbDpbamaC1K2EESqowzfs-0Q",
      },
      3: {
        id: 3,
        name: "Ezennabuife Eric Chimezie",
        imageurl:
          "https://drive.google.com/thumbnail?id=1n8kl-XEQTwXXSWG89_7ziB0RmObLhhhp",
      },
    },
  },
  {
    id: 9,
    name: "Entrepreneur of the Year (Bosso)",
    candidates: {
      1: {
        id: 1,
        name: "Sabastine Ngohile Felicia",
        imageurl:
          "https://drive.google.com/thumbnail?id=1WVh6cQZ8VbDpbamaC1K2EESqowzfs-0Q",
      },
      2: {
        id: 2,
        name: "Adekemi Faustina Ajibade",
        imageurl:
          "https://drive.google.com/thumbnail?id=18ZZtmmDnuAlr_MC_IdnkLAaBCrT1mZnc",
      },
    },
  },
  {
    id: 10,
    name: "Best Dressed Male (GK)",
    candidates: {
      1: {
        id: 1,
        name: "John oche samuel",
        imageurl:
          "https://drive.google.com/thumbnail?id=11PbHlM7by0_rj9nQxRAqgrCUItF1mAKf",
      },
    },
  },
  {
    id: 12,
    name: "Best Dressed Female (GK)",
    candidates: {
      1: {
        id: 1,
        name: "GODWIN JOVITA CHIAMAKA",
        imageurl:
          "https://drive.google.com/thumbnail?id=1p2jylo3HSpM5ebJKfYk57yISUeHNzWCt",
      },
      2: {
        id: 2,
        name: "Naze Seember Cecilia",
        imageurl:
          "https://drive.google.com/thumbnail?id=117ziims0BFnKXtnBR3YaV44s9KILve4T",
      },
      3: {
        id: 3,
        name: "Uwakwe Joy Chisom",
        imageurl:
          "https://drive.google.com/thumbnail?id=1FQ-AVZRVWH57xDBFdtXAjViBVQK2aGYa",
      },
    },
  },
  {
    id: 14,
    name: "Most Dedicated (GK)",
    candidates: {
      1: {
        id: 1,
        name: "Victor Oluwatimileyin Adeboye",
        imageurl:
          "https://drive.google.com/thumbnail?id=19bGiwjHl7j0qEMvIWxUw4q0tkgDYX5hJ",
      },
      2: {
        id: 2,
        name: "Awolowo Mary Abidemi",
        imageurl:
          "https://drive.google.com/thumbnail?id=1J9a9wuoN2hTjQmYA_2vgsoW672CAk1uY",
      },
      3: {
        id: 3,
        name: "Sani Nehemiah",
        imageurl:
          "https://drive.google.com/thumbnail?id=1K17EDuXXa5BiNuC1vwCscMwgQm0lagEr",
      },
      4: {
        id: 4,
        name: "Adewale Esther",
        imageurl:
          "https://drive.google.com/thumbnail?id=1Vm5-U7EI5TMIt1_FVLZKKImfArkTHPKb",
      },
      5: {
        id: 5,
        name: "Atsewe Joshua",
        imageurl:
          "https://drive.google.com/thumbnail?id=1F8hPnT-adJjseCSmvetiwXgJRiB0lT6x",
      },
      6: {
        id: 6,
        name: "Anyaegbu, Chizoba Assumpta",
        imageurl:
          "https://drive.google.com/thumbnail?id=1Et3qD2RYChdG5sahqltlhJn7pNJ42NyL",
      },
    },
  },
  {
    id: 15,
    name: "Most Dedicated (Bosso)",
    candidates: {
      1: {
        id: 1,
        name: "Ufomadu Stephen",
        imageurl:
          "https://drive.google.com/thumbnail?id=1sxXck-l4hSaBiHXh57YaPxRfHyz-SVkG",
      },
      2: {
        id: 2,
        name: "Osas-Evbuomwan Isaac Osasenaga",
        imageurl:
          "https://drive.google.com/thumbnail?id=1o_H5mSnsZbuTS3eb9WlrbZ1OPhjK_U0c",
      },
    },
  },
  {
    id: 16,
    name: "Outstanding Personality (GK)",
    candidates: {
      1: {
        id: 1,
        name: "Iweobi Joyce chidalu",
        imageurl:
          "https://drive.google.com/thumbnail?id=1R-75dBd0SfkVlCrsMCyhx25JOhyKnhH4",
      },
      2: {
        id: 2,
        name: "Anyaegbu, Chizoba Assumpta",
        imageurl:
          "https://drive.google.com/thumbnail?id=1Et3qD2RYChdG5sahqltlhJn7pNJ42NyL",
      },
      3: {
        id: 3,
        name: "PaulLuis Joseph Bazekore",
        imageurl:
          "https://drive.google.com/thumbnail?id=1mrPFqyQ8NFygwsKkyqYpokyXFfW5gfkh",
      },
      4: {
        id: 4,
        name: "Victor Oluwatimileyin Adeboye",
        imageurl:
          "https://drive.google.com/thumbnail?id=19bGiwjHl7j0qEMvIWxUw4q0tkgDYX5hJ",
      },
      5: {
        id: 5,
        name: "Sani Nehemiah",
        imageurl:
          "https://drive.google.com/thumbnail?id=1K17EDuXXa5BiNuC1vwCscMwgQm0lagEr",
      },
    },
  },
  {
    id: 17,
    name: "Outstanding Personality (Bosso)",
    candidates: {
      1: {
        id: 1,
        name: "Ufomadu Stephen",
        imageurl:
          "https://drive.google.com/thumbnail?id=1sxXck-l4hSaBiHXh57YaPxRfHyz-SVkG",
      },
    },
  },
  {
    id: 18,
    name: "Cool, Calm & Collected (GK)",
    candidates: {
      1: {
        id: 1,
        name: "Emmanuel Wilfred Ochai",
        imageurl:
          "https://drive.google.com/thumbnail?id=1XHWCGk76OHbHmn5UcWluugGhvrgLKupj",
      },
      2: {
        id: 2,
        name: "MANI UMAR",
        imageurl:
          "https://drive.google.com/thumbnail?id=19ZiiLjcPEFLw7COJZTU6kta74x2ZRU7e",
      },
      3: {
        id: 3,
        name: "Anyaegbu, Chizoba Assumpta",
        imageurl:
          "https://drive.google.com/thumbnail?id=1Et3qD2RYChdG5sahqltlhJn7pNJ42NyL",
      },
      4: {
        id: 4,
        name: "Adewale Esther",
        imageurl:
          "https://drive.google.com/thumbnail?id=1Vm5-U7EI5TMIt1_FVLZKKImfArkTHPKb",
      },
      5: {
        id: 5,
        name: "Sani Nehemiah",
        imageurl:
          "https://drive.google.com/thumbnail?id=1K17EDuXXa5BiNuC1vwCscMwgQm0lagEr",
      },
      6: {
        id: 6,
        name: "Osigbemhe imhonikhe John",
        imageurl:
          "https://drive.google.com/thumbnail?id=1y-Toh9G9iq0YCJzG32Sl2itYopV5T7Kl",
      },
    },
  },
  {
    id: 21,
    name: "Best Clique (GK)",
    candidates: {
      1: {
        id: 1,
        name: "Anyaegbu, Chizoba Assumpta",
        imageurl:
          "https://drive.google.com/thumbnail?id=1Et3qD2RYChdG5sahqltlhJn7pNJ42NyL",
      },
      2: {
        id: 2,
        name: "Awolowo Mary Abidemi",
        imageurl:
          "https://drive.google.com/thumbnail?id=1J9a9wuoN2hTjQmYA_2vgsoW672CAk1uY",
      },
      3: {
        id: 3,
        name: "Chizzy & Mary",
        imageurl: "/candidates/chizzy_mary.jpg",
      },
    },
  },
  {
    id: 22,
    name: "Best Clique (Bosso)",
    candidates: {
      1: {
        id: 1,
        name: "Linus Justina",
        imageurl:
          "https://drive.google.com/thumbnail?id=1sUb3rRUoIS0B6J1IpWA7WpkfAjGvd_03",
      },
    },
  },
  {
    id: 23,
    name: "Mr. Culture (GK)",
    candidates: {
      1: {
        id: 1,
        name: "Izekwe Ndubuisi Joshua",
        imageurl:
          "https://drive.google.com/thumbnail?id=11aRE-VRVK_J0KNVLX8D1W7gDvZvpNQrV",
      },
      2: {
        id: 2,
        name: "John oche samuel",
        imageurl:
          "https://drive.google.com/thumbnail?id=11PbHlM7by0_rj9nQxRAqgrCUItF1mAKf",
      },
    },
  },
  {
    id: 25,
    name: "Miss Culture (GK)",
    candidates: {
      1: {
        id: 1,
        name: "Araga Peace Ahuoyiza",
        imageurl:
          "https://drive.google.com/thumbnail?id=11im1aaXEe9m0URJX6pBnGt6832Fjdhq5",
      },
      2: {
        id: 2,
        name: "Awolowo Mary Abidemi",
        imageurl:
          "https://drive.google.com/thumbnail?id=1J9a9wuoN2hTjQmYA_2vgsoW672CAk1uY",
      },
    },
  },
  {
    id: 27,
    name: "Most Political",
    candidates: {
      1: {
        id: 1,
        name: "TIMBIR DAVID",
        imageurl:
          "https://drive.google.com/thumbnail?id=1gtRo3yRddFdz0ArUVgsTugRT3CY-5Z4h",
      },
    },
  },
  {
    id: 28,
    name: "Sports Personality of the Year (GK)",
    candidates: {
      1: {
        id: 1,
        name: "Abraham Labu Ibrahim",
        imageurl:
          "https://drive.google.com/thumbnail?id=1lAmUgMriDKtBeJfQ71xpN_b4PJRDVCr7",
      },
      2: {
        id: 2,
        name: "Ayaka Stephen abene",
        imageurl:
          "https://drive.google.com/thumbnail?id=1vKx-ALPoualkaF40VdtZsRRU9KH2b4-5",
      },
      3: {
        id: 3,
        name: "Ikyobo kashimana Sandra",
        imageurl:
          "https://drive.google.com/thumbnail?id=16RYcPqVXB6XUgAqk-UyKn0uu7oSH2zZG",
      },
    },
  },
  {
    id: 30,
    name: "Mr. Ebony (GK)",
    candidates: {
      1: {
        id: 1,
        name: "Olajide Olivia",
        imageurl:
          "https://drive.google.com/thumbnail?id=1ovBgrMi22Qo2DzZdPTvGF_GiGOT1ZOLh",
      },
    },
  },
  {
    id: 31,
    name: "Mr. Ebony (Bosso)",
    candidates: {
      1: {
        id: 1,
        name: "Osas-Evbuomwan Isaac Osasenaga",
        imageurl:
          "https://drive.google.com/thumbnail?id=1o_H5mSnsZbuTS3eb9WlrbZ1OPhjK_U0c",
      },
      2: {
        id: 2,
        name: "Happiness Simon",
        imageurl:
          "https://drive.google.com/thumbnail?id=1zi0N58JoKCbF3j0r689sVsZYSzlyg7bX",
      },
    },
  },
  {
    id: 32,
    name: "Miss Ebony (GK)",
    candidates: {
      1: {
        id: 1,
        name: "Olajide Olivia",
        imageurl:
          "https://drive.google.com/thumbnail?id=1ovBgrMi22Qo2DzZdPTvGF_GiGOT1ZOLh",
      },
      2: {
        id: 2,
        name: "Happiness Simon",
        imageurl:
          "https://drive.google.com/thumbnail?id=1zi0N58JoKCbF3j0r689sVsZYSzlyg7bX",
      },
    },
  },
  {
    id: 33,
    name: "Miss Ebony (Bosso)",
    candidates: {
      1: {
        id: 1,
        name: "Happiness Simon",
        imageurl:
          "https://drive.google.com/thumbnail?id=1zi0N58JoKCbF3j0r689sVsZYSzlyg7bX",
      },
    },
  },
  {
    id: 34,
    name: "Music Personality of the Year",
    candidates: {
      1: {
        id: 1,
        name: "PaulLuis Joseph Bazekore",
        imageurl:
          "https://drive.google.com/thumbnail?id=1mrPFqyQ8NFygwsKkyqYpokyXFfW5gfkh",
      },
      2: {
        id: 2,
        name: "Ayaka Stephen abene",
        imageurl:
          "https://drive.google.com/thumbnail?id=1vKx-ALPoualkaF40VdtZsRRU9KH2b4-5",
      },
      3: {
        id: 3,
        name: "Iwuamadi Joy",
        imageurl:
          "https://drive.google.com/thumbnail?id=1qXiPLyJJHkE7shm7FGjVnnyLT_Q_1KnD",
      },
      4: {
        id: 4,
        name: "Adewale Esther",
        imageurl:
          "https://drive.google.com/thumbnail?id=1Vm5-U7EI5TMIt1_FVLZKKImfArkTHPKb",
      },
    },
  },
  // Categories with no candidates in the nominations file
  {
    id: 11,
    name: "Best Dressed Male (Bosso)",
    candidates: {},
  },
  {
    id: 13,
    name: "Best Dressed Female (Bosso)",
    candidates: {},
  },
  {
    id: 19,
    name: "Cool, Calm & Collected (Bosso)",
    candidates: {},
  },
  {
    id: 20,
    name: "Most Influential",
    candidates: {},
  },
  {
    id: 24,
    name: "Mr. Culture (Bosso)",
    candidates: {},
  },
  {
    id: 26,
    name: "Miss Culture (Bosso)",
    candidates: {},
  },
  {
    id: 29,
    name: "Sports Personality of the Year (Bosso)",
    candidates: {},
  },
  {
    id: 35,
    name: "Couple of the Year",
    candidates: {},
  },
];

interface SelectedCandidates {
  [categoryId: number]: string;
}
const page = () => {
  const [selectedCandidates, setSelectedCandidates] =
    useState<SelectedCandidates>({});

  const handleCandidateSelect = (categoryId: number, candidateName: string) => {
    setSelectedCandidates((prev) => ({
      ...prev,
      [categoryId]: candidateName,
    }));
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center mx-3 font-sans pt-7 gap">
        <h2 className="text-lg font-light lg:text-2xl ">NOX AMORIS AWARDS</h2>
        <h2 className="text-lg lg:text-3xl font-extrabold text-[#2E7D32]">
          YOU MAY CAST YOUR VOTES!
        </h2>
        <ul>
          {categories.map((category) => (
            <li
              key={category.id}
              className="py-2 my-3 rounded-lg lg:my-5 lg:px-7"
            >
              <div className="flex flex-col items-center justify-center w-full my-7">
                <h1 className="font-bold">{category.name}</h1>
                <div className="flex flex-wrap items-center justify-center h-full gap-4 mt-2 lg:mt-7 lg:gap-4">
                  {Object.values(category.candidates).map(
                    (candidate, index) => (
                      <div
                        key={candidate.name}
                        onClick={() => {
                          handleCandidateSelect(category.id, candidate.name);
                        }}
                        className={` ${
                          selectedCandidates[category.id] === candidate.name
                            ? "ring-2 ring-red-400 rounded-lg"
                            : "ring-1 ring-(--primary) rounded-lg"
                        }`}
                      >
                        <CandidateCard
                          name={candidate.name}
                          imageUrl={candidate.imageurl}
                        />
                      </div>
                    )
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
        <button className="bg-(--primary) text-sm md:text-xl text-(--secondary) h-10 lg:h-10 w-full rounded-xl  font-bold ">
          Submit Votes
        </button>
      </div>
    </div>
  );
};

export default page;
