import { useUser } from "@clerk/nextjs";
import { FC, FormEvent, PropsWithChildren, useEffect } from "react";
import slugify from "slugify";
import { api } from "~/utils/api";

export const CreateFarmWizard: FC<PropsWithChildren> = ({ children }) => {
  const mutation = api.farms.createFarms.useMutation();
  const { isSignedIn, user } = useUser();
  useEffect(() => {
    console.log(user);
  }, [user]);
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!isSignedIn) return;
    const upsertData = [
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
        ownerId: user.id,
      },
      {
        name: "Bucky's Farm",
        slug: slugify("Lucky's Farm", { lower: true }),
        image: "https://source.unsplash.com/featured/?farm",
        latitude: 43.6532,
        longitude: -79.3832,
        description: "A farm in Toronto",
        address: "123 Fake Street",
        rating: 4.5,
        offersDelivery: true,
        seasonId: "1",
        ownerId: user.id,
      },
      {
        name: "Ducky's Farm",
        slug: slugify("Lucky's Farm", { lower: true }),
        image: "https://source.unsplash.com/featured/?farm",
        latitude: 43.6532,
        longitude: -79.3832,
        description: "A farm in Toronto",
        address: "123 Fake Street",
        rating: 4.5,
        offersDelivery: true,
        seasonId: "1",
        ownerId: user.id,
      },
      {
        name: "Rucky's Farm",
        slug: slugify("Lucky's Farm", { lower: true }),
        image: "https://source.unsplash.com/featured/?farm",
        latitude: 43.6532,
        longitude: -79.3832,
        description: "A farm in Toronto",
        address: "123 Fake Street",
        rating: 4.5,
        offersDelivery: true,
        seasonId: "1",
        ownerId: user.id,
      },
      {
        name: "Jucky's Farm",
        slug: slugify("Lucky's Farm", { lower: true }),
        image: "https://source.unsplash.com/featured/?farm",
        latitude: 43.6532,
        longitude: -79.3832,
        description: "A farm in Toronto",
        address: "123 Fake Street",
        rating: 4.5,
        offersDelivery: true,
        seasonId: "1",
        ownerId: user.id,
      },
      {
        name: "Pucky's Farm",
        slug: slugify("Lucky's Farm", { lower: true }),
        image: "https://source.unsplash.com/featured/?farm",
        latitude: 43.6532,
        longitude: -79.3832,
        description: "A farm in Toronto",
        address: "123 Fake Street",
        rating: 4.5,
        offersDelivery: true,
        seasonId: "1",
        ownerId: user.id,
      },
      {
        name: "Yucky's Farm",
        slug: slugify("Lucky's Farm", { lower: true }),
        image: "https://source.unsplash.com/featured/?farm",
        latitude: 43.6532,
        longitude: -79.3832,
        description: "A farm in Toronto",
        address: "123 Fake Street",
        rating: 4.5,
        offersDelivery: true,
        seasonId: "1",
        ownerId: user.id,
      },
    ];
    mutation.mutate(upsertData);
  };
  return (
    <div>
      <h1>Create Farm Wizard</h1>
      <form onSubmit={handleSubmit}>
        <button type="submit">Submit</button>
      </form>
      {children}
    </div>
  );
};
