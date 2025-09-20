import CategorySeeder from "./categories";
import CandidateSeeder from "./candidates";
import UserSeeder from "./users";

async function runSequentially() {
  console.log("Starting Seeder...");
  try {
    await CategorySeeder();
    await CandidateSeeder();
    await UserSeeder();
    console.log("All Seeders Completed");
    process.exit(0);
  } catch (err) {
    console.error("Seeder failed:", err);
    process.exit(1);
  }
}

runSequentially();
