import { PrismaClient } from "@/generated/prisma";
const prisma = new PrismaClient();

const categoryData = [
  { name: "Best Clique (Bosso)" },
  { name: "Best Clique (GK)" },
  { name: "Best Dressed Female (Bosso)" },
  { name: "Best Dressed Female (GK)" },
  { name: "Best Dressed Male (Bosso)" },
  { name: "Best Dressed Male (GK)" },
  { name: "Cool, Calm & Collected (Bosso)" },
  { name: "Cool, Calm & Collected (GK)" },
  { name: "Couple of the Year" },
  { name: "Entrepreneur of the Year (GK)" },
  { name: "Mr Culture (Bosso)" },
  { name: "Miss Culture (GK)" },
  { name: "Miss Ebony (GK)" },
  { name: "Most Beautiful (Bosso)" },
  { name: "Most Beautiful (GK)" },
  { name: "Most Dedicated (Bosso)" },
  { name: "Most Dedicated (GK)" },
  { name: "Most Handsome (Bosso)" },
  { name: "Most Handsome (GK)" },
  { name: "Most Influential (GK)" },
  { name: "Most Intellectual (Bosso)" },
  { name: "Most Intellectual (GK)" },
  { name: "Most Political" },
  { name: "Most Social" },
  { name: "Mr. Culture (Bosso)" },
  { name: "Mr. Culture (GK)" },
  { name: "Mr. Ebony (Bosso)" },
  { name: "Mr. Ebony (GK)" },
  { name: "Music Personality of the Year" },
  { name: "Outstanding Personality (Bosso)" },
  { name: "Outstanding Personality (GK)" },
  { name: "Sports Personality of the Year (GK)" },
];

async function main() {
  console.log("Start seeding categories...");

  for (const category of categoryData) {
    const createdCategory = await prisma.category.create({
      data: category,
    });
    console.log(
      `Created category: ${createdCategory.name} :::: ${Math.floor(
        (categoryData.indexOf(category) / categoryData.length) * 100
      )}% Complete`
    );
  }

  console.log("Seeding finished.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
