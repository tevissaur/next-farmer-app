import { useUser } from "@clerk/nextjs";
import { Farm } from "@prisma/client";
import { FC, FormEvent, PropsWithChildren, useEffect } from "react";
import slugify from "slugify";
import { api } from "~/utils/api";

interface CreateProductWizardProps extends PropsWithChildren {
  farm?: Farm | null;
}

export const CreateProductWizard: FC<CreateProductWizardProps> = ({
  children,
  farm,
}) => {
  const mutation = api.products.createProducts.useMutation();
  const { isSignedIn, user } = useUser();
  useEffect(() => {
    console.log(farm);
  }, [farm]);
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!isSignedIn) return;
    const upsertData = [
      {
        name: "Strawberries",
        farmId: farm?.id || "",
        description: "Fresh strawberries",
        price: 5.99,
        unitOfMeasure: "ea",
        categoryId: "clhi332jd0000forsuxedwjcj",
        rating: 5,
      },
      {
        name: "Blueberries",
        farmId: farm?.id || "",
        description: "Fresh blueberries",
        price: 5.99,
        unitOfMeasure: "ea",
        categoryId: "clhi332jd0000forsuxedwjcj",
        rating: 5,
      },
      {
        name: "Watermelon",
        farmId: farm?.id || "",
        description: "Fresh watermelon",
        price: 5.99,
        unitOfMeasure: "ea",
        categoryId: "clhi332jd0000forsuxedwjcj",
        rating: 5,
      },
      {
        name: "Mulberries",
        farmId: farm?.id || "",
        description: "Fresh mulberries",
        price: 5.99,
        unitOfMeasure: "ea",
        categoryId: "clhi332jd0000forsuxedwjcj",
        rating: 5,
      },
    ];
    mutation.mutate(upsertData);
  };
  return (
    <div>
      <h1>Create Product Wizard</h1>
      <form onSubmit={handleSubmit}>
        <button type="submit">Submit</button>
      </form>
      {children}
    </div>
  );
};
