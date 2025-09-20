import { PrismaClient } from "@/generated/prisma";
import * as fs from "fs";
import * as path from "path";

const prisma = new PrismaClient();

export default async function main() {
  console.log("Start seeding users...");

  try {
    const filePath = path.join(process.cwd(), "data", "emails_only.json");
    const rawData = fs.readFileSync(filePath, "utf8");
    const users = JSON.parse(rawData);

    console.log("Clearing users table...");
    await prisma.user.deleteMany({});

    console.log(`Found ${users.length} users to seed`);

    for (const user of users) {
      const createdUser = await prisma.user.create({
        data: {
          email: user,
          hasVoted: false,
        },
      });
      console.log(
        `Created user with email: ${user} :::: ${Math.floor(
          (users.indexOf(user) / users.length) * 100
        )}% Complete`
      );
    }

    console.log("User seeding finished successfully.");
  } catch (error) {
    console.error("Error during user seeding:", error);
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
