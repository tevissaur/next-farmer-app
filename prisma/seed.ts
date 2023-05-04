import slugify from "slugify";
import { prisma } from "../src/server/db";

async function main() {
  // Seed the database based on the schema in schema.prisma
  await prisma.category.createMany({
    data: [
      {
        name: "Fruits and Vegetables",
        slug: slugify("Fruits and Vegetables", { lower: true }),
      },
      {
        name: "Plants, and Flowers",
        slug: slugify("Plants, and Flowers", { lower: true }),
      },
      {
        name: "Meat, and Dairy",
        slug: slugify("Meat, and Dairy", { lower: true }),
      },
      {
        name: "Preserves, and Honey",
        slug: slugify("Preserves, and Honey", { lower: true }),
      },
      {
        name: "Baked Goods, and Sweets",
        slug: slugify("Baked Goods, and Sweets", { lower: true }),
      },
      {
        name: "Personal Care, and Cleaning",
        slug: slugify("Personal Care, and Cleaning", { lower: true }),
      },
    ],
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
