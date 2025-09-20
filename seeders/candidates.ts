import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

const candidateData = {
  "Best Clique (Bosso)": [
    {
      name: "Linus Justina",
      image:
        "https://drive.google.com/thumbnail?id=1sUb3rRUoIS0B6J1IpWA7WpkfAjGvd_03",
    },
    {
      name: "Sabastine Ngohile Felicia",
      image:
        "https://drive.google.com/thumbnail?id=1WVh6cQZ8VbDpbamaC1K2EESqowzfs-0Q",
    },
  ],
  "Best Clique (GK)": [
    { name: "Chizzy & Mary", image: "candidates/chizzy-clique-gk.jpg" },
  ],
  "Best Dressed Female (Bosso)": [
    {
      name: "Dawa Cecilia Nathaniel",
      image:
        "https://drive.google.com/thumbnail?id=1wYZ28gLmRNVZu0X5cy9tlIShtRTBULuV",
    },
  ],
  "Best Dressed Female (GK)": [
    {
      name: "GODWIN JOVITA CHIAMAKA",
      image:
        "https://drive.google.com/thumbnail?id=1p2jylo3HSpM5ebJKfYk57yISUeHNzWCt",
    },
    {
      name: "Uwakwe Joy Chisom",
      image:
        "https://drive.google.com/thumbnail?id=1FQ-AVZRVWH57xDBFdtXAjViBVQK2aGYa",
    },
    {
      name: "Naze Seember Cecilia",
      image:
        "https://drive.google.com/thumbnail?id=117ziims0BFnKXtnBR3YaV44s9KILve4T",
    },
  ],
  "Best Dressed Male (Bosso)": [
    {
      name: "Abutu Emmanuel Agaba",
      image:
        "https://drive.google.com/thumbnail?id=1jW0ERzeXWP740nqge3WQuz_yZcAPuqAW",
    },
    {
      name: "Emmanuel Akubo Unekwuojo",
      image:
        "https://drive.google.com/thumbnail?id=117YAhMZiQs51Gvgb0lNlnO6R_jFrY_YA",
    },
  ],
  "Best Dressed Male (GK)": [
    {
      name: "John oche samuel",
      image:
        "https://drive.google.com/thumbnail?id=11PbHlM7by0_rj9nQxRAqgrCUItF1mAKf",
    },
  ],
  "Cool, Calm & Collected (GK)": [
    {
      name: "Osigbemhe imhonikhe John",
      image:
        "https://drive.google.com/thumbnail?id=1y-Toh9G9iq0YCJzG32Sl2itYopV5T7Kl",
    },
    {
      name: "Olajide Olivia",
      image:
        "https://drive.google.com/thumbnail?id=1ovBgrMi22Qo2DzZdPTvGF_GiGOT1ZOLh",
    },
    {
      name: "Emmanuel Wilfred Ochai",
      image:
        "https://drive.google.com/thumbnail?id=1XHWCGk76OHbHmn5UcWluugGhvrgLKupj",
    },
    {
      name: "Sani Nehemiah",
      image:
        "https://drive.google.com/thumbnail?id=1K17EDuXXa5BiNuC1vwCscMwgQm0lagEr",
    },
    {
      name: "MANI UMAR",
      image:
        "https://drive.google.com/thumbnail?id=19ZiiLjcPEFLw7COJZTU6kta74x2ZRU7e",
    },
    {
      name: "Adewale Esther",
      image:
        "https://drive.google.com/thumbnail?id=1Vm5-U7EI5TMIt1_FVLZKKImfArkTHPKb",
    },
    {
      name: "Anyaegbu, Chizoba Assumpta",
      image:
        "https://drive.google.com/thumbnail?id=1Et3qD2RYChdG5sahqltlhJn7pNJ42NyL",
    },
    {
      name: "Alfa Vincent OnucheOjo",
      image:
        "https://drive.google.com/thumbnail?id=1rsjuAbsR8d3tJqJHYb76etydF813pBbs",
    },
  ],
  "Couple of the Year": [
    {
      name: "DAVID AND SANDRA",
      image:
        "https://drive.google.com/thumbnail?id=1gtRo3yRddFdz0ArUVgsTugRT3CY-5Z4h",
    },
  ],
  "Entrepreneur of the Year (GK)": [
    {
      name: "Sabastine Ngohile Felicia",
      image:
        "https://drive.google.com/thumbnail?id=1WVh6cQZ8VbDpbamaC1K2EESqowzfs-0Q",
    },
    {
      name: "Adekemi Faustina Ajibade",
      image:
        "https://drive.google.com/thumbnail?id=18ZZtmmDnuAlr_MC_IdnkLAaBCrT1mZnc",
    },
    {
      name: "Uwakwe Joy Chisom",
      image:
        "https://drive.google.com/thumbnail?id=1FQ-AVZRVWH57xDBFdtXAjViBVQK2aGYa",
    },
    {
      name: "Ezennabuife Eric Chimezie",
      image:
        "https://drive.google.com/thumbnail?id=1n8kl-XEQTwXXSWG89_7ziB0RmObLhhhp",
    },
  ],
  "Mr Culture (Bosso)": [
    {
      name: "Okeh Francis Chimaroke",
      image:
        "https://drive.google.com/thumbnail?id=1d_2YiVNRSUp3RpuOWn-fgwOnbL4MCd3N",
    },
  ],
  "Miss Culture (GK)": [
    {
      name: "Awolowo Mary Abidemi",
      image:
        "https://drive.google.com/thumbnail?id=1J9a9wuoN2hTjQmYA_2vgsoW672CAk1uY",
    },
    {
      name: "Araga Peace Ahuoyiza",
      image:
        "https://drive.google.com/thumbnail?id=11im1aaXEe9m0URJX6pBnGt6832Fjdhq5",
    },
    {
      name: "Ikyobo kashimana Sandra",
      image:
        "https://drive.google.com/thumbnail?id=16RYcPqVXB6XUgAqk-UyKn0uu7oSH2zZG",
    },
  ],
  "Miss Ebony (GK)": [
    {
      name: "Ameh Regina Gracious",
      image:
        "https://drive.google.com/thumbnail?id=1lBHkwz6PN2Bt5wqkvnXneSK7EeDWe3VR",
    },
    {
      name: "Olajide Olivia",
      image:
        "https://drive.google.com/thumbnail?id=1ovBgrMi22Qo2DzZdPTvGF_GiGOT1ZOLh",
    },
    {
      name: "Happiness Simon",
      image:
        "https://drive.google.com/thumbnail?id=1zi0N58JoKCbF3j0r689sVsZYSzlyg7bX",
    },
    {
      name: "Obute ladi",
      image:
        "https://drive.google.com/thumbnail?id=1H6UH2RquUqiuhpGgIhN9HLrIPaINgyHJ",
    },
  ],
  "Most Beautiful (Bosso)": [
    {
      name: "Esther Benjamin",
      image:
        "https://drive.google.com/thumbnail?id=1ggV5X0DZnBCBs-X6gwkdtjBqkwUxuCu5",
    },
  ],
  "Most Beautiful (GK)": [
    {
      name: "GODWIN JOVITA CHIAMAKA",
      image:
        "https://drive.google.com/thumbnail?id=1p2jylo3HSpM5ebJKfYk57yISUeHNzWCt",
    },
    {
      name: "Uwakwe Joy Chisom",
      image:
        "https://drive.google.com/thumbnail?id=1FQ-AVZRVWH57xDBFdtXAjViBVQK2aGYa",
    },
    {
      name: "Naze Seember Cecilia",
      image:
        "https://drive.google.com/thumbnail?id=117ziims0BFnKXtnBR3YaV44s9KILve4T",
    },
    {
      name: "Francis Doris Ojone",
      image:
        "https://drive.google.com/thumbnail?id=1yUoToTgQlF4-j0oSN5qQmXHcXmNXOKnU",
    },
    {
      name: "Happiness Simon",
      image:
        "https://drive.google.com/thumbnail?id=1zi0N58JoKCbF3j0r689sVsZYSzlyg7bX",
    },
  ],
  "Most Dedicated (Bosso)": [
    {
      name: "Ufomadu Stephen",
      image:
        "https://drive.google.com/thumbnail?id=1sxXck-l4hSaBiHXh57YaPxRfHyz-SVkG",
    },
    {
      name: "Osas-Evbuomwan Isaac Osasenaga",
      image:
        "https://drive.google.com/thumbnail?id=1o_H5mSnsZbuTS3eb9WlrbZ1OPhjK_U0c",
    },
  ],
  "Most Dedicated (GK)": [
    {
      name: "Anyaegbu, Chizoba Assumpta",
      image:
        "https://drive.google.com/thumbnail?id=1Et3qD2RYChdG5sahqltlhJn7pNJ42NyL",
    },
    {
      name: "Awolowo Mary Abidemi",
      image:
        "https://drive.google.com/thumbnail?id=1J9a9wuoN2hTjQmYA_2vgsoW672CAk1uY",
    },
    {
      name: "Atsewe Joshua",
      image:
        "https://drive.google.com/thumbnail?id=1F8hPnT-adJjseCSmvetiwXgJRiB0lT6x",
    },
    {
      name: "Sani Nehemiah",
      image:
        "https://drive.google.com/thumbnail?id=1K17EDuXXa5BiNuC1vwCscMwgQm0lagEr",
    },
    {
      name: "Victor Oluwatimileyin Adeboye",
      image:
        "https://drive.google.com/thumbnail?id=19bGiwjHl7j0qEMvIWxUw4q0tkgDYX5hJ",
    },
    {
      name: "Adewale Esther",
      image:
        "https://drive.google.com/thumbnail?id=1Vm5-U7EI5TMIt1_FVLZKKImfArkTHPKb",
    },
  ],
  "Most Handsome (Bosso)": [
    {
      name: "Abutu Emmanuel Agaba",
      image:
        "https://drive.google.com/thumbnail?id=1jW0ERzeXWP740nqge3WQuz_yZcAPuqAW",
    },
    {
      name: "Nwakuche Emmanuel",
      image:
        "https://drive.google.com/thumbnail?id=1V4SCrcdBEhyk2swWSOZTBPt1XiVdMprN",
    },
    {
      name: "Emmanuel Akubo Unekwuojo",
      image:
        "https://drive.google.com/thumbnail?id=117YAhMZiQs51Gvgb0lNlnO6R_jFrY_YA",
    },
  ],
  "Most Handsome (GK)": [
    {
      name: "Victor Oluwatimileyin Adeboye",
      image:
        "https://drive.google.com/thumbnail?id=19bGiwjHl7j0qEMvIWxUw4q0tkgDYX5hJ",
    },
    {
      name: "Nwakuche Emmanuel",
      image:
        "https://drive.google.com/thumbnail?id=1V4SCrcdBEhyk2swWSOZTBPt1XiVdMprN",
    },
    {
      name: "Ehianeta Michael Eghonghon",
      image:
        "https://drive.google.com/thumbnail?id=1Y2HettRzwwNs5GxM54di4tie7_vt8dnJ",
    },
    {
      name: "Ochaje Emmanuel Adoche",
      image:
        "https://drive.google.com/thumbnail?id=1b6IM6RS6Fs7282LT0XbJHJ_Sl3zxCPKP",
    },
  ],
  "Most Influential (GK)": [
    {
      name: "Sani Nehemiah",
      image:
        "https://drive.google.com/thumbnail?id=1K17EDuXXa5BiNuC1vwCscMwgQm0lagEr",
    },
  ],
  "Most Intellectual (Bosso)": [
    {
      name: "Okeh Francis Chimaroke",
      image:
        "https://drive.google.com/thumbnail?id=1d_2YiVNRSUp3RpuOWn-fgwOnbL4MCd3N",
    },
  ],
  "Most Intellectual (GK)": [
    {
      name: "Obute ladi",
      image:
        "https://drive.google.com/thumbnail?id=1H6UH2RquUqiuhpGgIhN9HLrIPaINgyHJ",
    },
    {
      name: "Uchebueze Ebuka",
      image:
        "https://drive.google.com/thumbnail?id=1XnsNBcCT6xHiFyfjRHpfKKtuh_8z5D4g",
    },
    {
      name: "Iwuamadi Joy",
      image:
        "https://drive.google.com/thumbnail?id=1qXiPLyJJHkE7shm7FGjVnnyLT_Q_1KnD",
    },
    {
      name: "Thomas Kambai Stephen",
      image:
        "https://drive.google.com/thumbnail?id=1hnVJtf_aEB4LHRpsXGUcdtktUsGTMilu",
    },
  ],
  "Most Political": [
    {
      name: "TIMBIR DAVID",
      image:
        "https://drive.google.com/thumbnail?id=1gtRo3yRddFdz0ArUVgsTugRT3CY-5Z4h",
    },
    {
      name: "MANI UMAR",
      image:
        "https://drive.google.com/thumbnail?id=19ZiiLjcPEFLw7COJZTU6kta74x2ZRU7e",
    },
  ],
  "Most Social": [
    {
      name: "Francis Esther Ugbedeojo",
      image:
        "https://drive.google.com/thumbnail?id=1E76LQgguEHav29V2mwAenAmRegrbC_ry",
    },
    {
      name: "Abakpa Emmanuel Emzzil",
      image:
        "https://drive.google.com/thumbnail?id=1Y3bXzWkbIfzqdx2SFSqNJPA6zL4WELRp",
    },
    {
      name: "Onipe John Adeiza Martin",
      image:
        "https://drive.google.com/thumbnail?id=1wPJz4IWA24mIE-Vje5_rvo04r-n1FX3S",
    },
    {
      name: "Ezennabuife Eric Chimezie",
      image:
        "https://drive.google.com/thumbnail?id=1n8kl-XEQTwXXSWG89_7ziB0RmObLhhhp",
    },
  ],
  "Mr. Culture (Bosso)": [
    {
      name: "Okeh Francis Chimaroke",
      image:
        "https://drive.google.com/thumbnail?id=1d_2YiVNRSUp3RpuOWn-fgwOnbL4MCd3N",
    },
  ],
  "Mr. Culture (GK)": [
    {
      name: "John oche samuel",
      image:
        "https://drive.google.com/thumbnail?id=11PbHlM7by0_rj9nQxRAqgrCUItF1mAKf",
    },
    {
      name: "Izekwe Ndubuisi Joshua",
      image:
        "https://drive.google.com/thumbnail?id=11aRE-VRVK_J0KNVLX8D1W7gDvZvpNQrV",
    },
  ],
  "Mr. Ebony (Bosso)": [
    {
      name: "Osas-Evbuomwan Isaac Osasenaga",
      image:
        "https://drive.google.com/thumbnail?id=1o_H5mSnsZbuTS3eb9WlrbZ1OPhjK_U0c",
    },
  ],
  "Mr. Ebony (GK)": [
    {
      name: "Olajide Olivia",
      image:
        "https://drive.google.com/thumbnail?id=1ovBgrMi22Qo2DzZdPTvGF_GiGOT1ZOLh",
    },
    {
      name: "MANI UMAR",
      image:
        "https://drive.google.com/thumbnail?id=19ZiiLjcPEFLw7COJZTU6kta74x2ZRU7e",
    },
  ],
  "Music Personality of the Year": [
    {
      name: "Iwuamadi Joy",
      image:
        "https://drive.google.com/thumbnail?id=1qXiPLyJJHkE7shm7FGjVnnyLT_Q_1KnD",
    },
    {
      name: "Ayaka Stephen abene",
      image:
        "https://drive.google.com/thumbnail?id=1vKx-ALPoualkaF40VdtZsRRU9KH2b4-5",
    },
    {
      name: "PaulLuis Joseph Bazekore",
      image:
        "https://drive.google.com/thumbnail?id=1mrPFqyQ8NFygwsKkyqYpokyXFfW5gfkh",
    },
    {
      name: "Adewale Esther",
      image:
        "https://drive.google.com/thumbnail?id=1Vm5-U7EI5TMIt1_FVLZKKImfArkTHPKb",
    },
  ],
  "Outstanding Personality (Bosso)": [
    {
      name: "Ufomadu Stephen",
      image:
        "https://drive.google.com/thumbnail?id=1sxXck-l4hSaBiHXh57YaPxRfHyz-SVkG",
    },
  ],
  "Outstanding Personality (GK)": [
    {
      name: "Anyaegbu, Chizoba Assumpta",
      image:
        "https://drive.google.com/thumbnail?id=1Et3qD2RYChdG5sahqltlhJn7pNJ42NyL",
    },
    {
      name: "Sani Nehemiah",
      image:
        "https://drive.google.com/thumbnail?id=1K17EDuXXa5BiNuC1vwCscMwgQm0lagEr",
    },
    {
      name: "Victor Oluwatimileyin Adeboye",
      image:
        "https://drive.google.com/thumbnail?id=19bGiwjHl7j0qEMvIWxUw4q0tkgDYX5hJ",
    },
    {
      name: "Iweobi Joyce chidalu",
      image:
        "https://drive.google.com/thumbnail?id=1R-75dBd0SfkVlCrsMCyhx25JOhyKnhH4",
    },
    {
      name: "PaulLuis Joseph Bazekore",
      image:
        "https://drive.google.com/thumbnail?id=1mrPFqyQ8NFygwsKkyqYpokyXFfW5gfkh",
    },
    {
      name: "Ochaje Emmanuel Adoche",
      image:
        "https://drive.google.com/thumbnail?id=1b6IM6RS6Fs7282LT0XbJHJ_Sl3zxCPKP",
    },
  ],
  "Sports Personality of the Year (GK)": [
    {
      name: "Ayaka Stephen abene",
      image:
        "https://drive.google.com/thumbnail?id=1vKx-ALPoualkaF40VdtZsRRU9KH2b4-5",
    },
    {
      name: "Abraham Labu Ibrahim",
      image:
        "https://drive.google.com/thumbnail?id=1lAmUgMriDKtBeJfQ71xpN_b4PJRDVCr7",
    },
    {
      name: "Ikyobo kashimana Sandra",
      image:
        "https://drive.google.com/thumbnail?id=16RYcPqVXB6XUgAqk-UyKn0uu7oSH2zZG",
    },
  ],
};

export default async function main() {
  console.log("Start seeding candidates...");

  for (const [categoryName, candidates] of Object.entries(candidateData)) {
    // Find the category by name
    const category = await prisma.category.findFirst({
      where: { name: categoryName },
    });

    if (!category) {
      console.log(`Category not found: ${categoryName}`);
      continue;
    }

    for (const candidate of candidates) {
      const createdCandidate = await prisma.candidate.create({
        data: {
          ...candidate,
          category: {
            connect: { id: category.id },
          },
        },
      });
      console.log(
        `Created candidate: ${
          createdCandidate.name
        } in category: ${categoryName} :::: ${Math.floor(
          (candidates.indexOf(candidate) / candidates.length) * 100
        )}% Complete`
      );
    }
  }

  console.log("Seeding finished.");
  await prisma.$disconnect();
}
