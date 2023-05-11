import slugify from "slugify";
import { prisma } from "../src/server/db";

async function main() {
  await prisma.article.deleteMany();
  await prisma.farmMember.deleteMany();
  await prisma.product.deleteMany();
  // Seed the database based on the schema in schema.prisma with descriptive data
  await prisma.category.deleteMany();
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

  await prisma.farm.deleteMany();
  await prisma.farm.createMany({
    data: [
      {
        name: "Lucky's Farm",
        slug: slugify("Lucky's Farm", { lower: true }),
        image: "https://source.unsplash.com/featured/?farm",
        latitude: 43.6532,
        longitude: -79.3832,
        description: "A farm in Toronto",
        address: "123 Fake Street",
        rating: 4.5,
        offersDelivery: true,
        seasonId: "1",
        ownerId: "user_2Ovr5B1HU9DVI7YXKqc9IByZnBP",
      },
      {
        name: "Bucky's Farm",
        slug: slugify("Bucky's Farm", { lower: true }),
        image: "https://source.unsplash.com/featured/?farm",
        latitude: 43.6532,
        longitude: -79.3832,
        description: "A farm in Toronto",
        address: "123 Fake Street",
        rating: 4.5,
        offersDelivery: true,
        seasonId: "1",
        ownerId: "user_2Ovr5B1HU9DVI7YXKqc9IByZnBP",
      },
      {
        name: "Ducky's Farm",
        slug: slugify("Ducky's Farm", { lower: true }),
        image: "https://source.unsplash.com/featured/?farm",
        latitude: 43.6532,
        longitude: -79.3832,
        description: "A farm in Toronto",
        address: "123 Fake Street",
        rating: 4.5,
        offersDelivery: true,
        seasonId: "1",
        ownerId: "user_2Ovr5B1HU9DVI7YXKqc9IByZnBP",
      },
    ],
  });

  await prisma.filter.deleteMany();
  await prisma.filter.createMany({
    data: [
      {
        label: "Organic",
        value: slugify("Organic", { lower: true }),
        type: "checkbox",
      },
      {
        label: "Non-GMO",
        value: slugify("Non-GMO", { lower: true }),
        type: "checkbox",
      },
      {
        label: "Gluten-Free",
        value: slugify("Gluten-Free", { lower: true }),
        type: "checkbox",
      },
      {
        label: "Farms",
        value: slugify("Farms", { lower: true }),
        type: "checkbox",
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
