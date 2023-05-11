import { useUser } from "@clerk/nextjs";
import { type NextPage } from "next";
import { useRouter } from "next/router";

import { useEffect } from "react";
import { CreateProductWizard } from "~/components/create-wizards/product";
import { TextArea } from "~/components/inputs";

import { api } from "~/utils/api";

const FarmDashboard: NextPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const { data: farm, isSuccess } = api.farms.getFarmBySlug.useQuery(
    slug as string
  );
  return (
    <>
      <CreateProductWizard farm={farm} />
      {isSuccess && farm && (
        <div
          key={farm.id}
          className="flex flex-col items-center justify-center"
        >
          <h1 className="text-3xl font-semibold leading-7 text-gray-900">
            {farm.name}
          </h1>
          <div className="flex flex-col items-center justify-center">
            {farm.products.map((product) => (
              <div
                key={product.id}
                className="flex flex-col items-center justify-center"
              >
                <h2 className="text-2xl font-semibold leading-7 text-gray-900">
                  {product.name}
                </h2>
                <div className="flex flex-col items-center justify-center">
                  {product.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default FarmDashboard;
