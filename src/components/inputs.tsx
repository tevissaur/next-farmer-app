import {
  ChangeEvent,
  FC,
  FormEvent,
  PropsWithChildren,
  SyntheticEvent,
  useEffect,
} from "react";
import {
  CheckIcon,
  ChevronUpDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { api } from "~/utils/api";
import { useAppDispatch, useAppSelector } from "~/utils/hooks";
import { setQuery } from "~/utils/slices/search/search-slice";
import { Combobox } from "@headlessui/react";
import { Farm, Product } from "@prisma/client";
import Link from "next/link";
import { HTTPResponse } from "@trpc/server/dist/http/internals/types";

interface InputProps extends PropsWithChildren {
  placeholder?: string;
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
export const SearchBar: FC<InputProps> = ({ placeholder }) => {
  const dispatch = useAppDispatch();

  const { latitude, longitude } = useAppSelector(
    (state) => state.user.location
  );

  const { query } = useAppSelector((state) => state.search);
  const queryObj = {
    query,
    latitude,
    longitude,
  };

  const { data, isLoading, isError, refetch, isRefetching } =
    api.search.fuzzySearch.useQuery(queryObj);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setQuery(e.target.value));
    refetch()
      .then((value) => console.log(value))
      .catch((err) => console.log(err));
  };

  const handleSelect = (e: SyntheticEvent<HTMLDivElement>) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <>
      <Combobox
        as="div"
        className="relative w-full"
        onSelect={(e) => handleSelect(e)}
      >
        <Combobox.Input
          className="input-primary"
          onChange={(event) => handleSearch(event)}
          displayValue={(obj: Farm | Product) => obj.name}
          placeholder={"Search!"}
        />
        <Combobox.Button
          className="absolute inset-y-0 right-2 flex items-center justify-center rounded-r-md px-2 focus:outline-none"
          onClick={() => {
            refetch()
              .then((value) => console.log(value))
              .catch((err) => console.log(err));
          }}
        >
          <MagnifyingGlassIcon
            className="h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </Combobox.Button>

        {data && (data.farms.length || data.products.length) > 0 && (
          <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {data.farms && data.farms.length > 0 && (
              <h3 className="flex items-center border-b-1 px-4 py-2 text-lg">
                Farms
              </h3>
            )}

            {data.farms.map((farm) => (
              <Link href={`/storefront/${farm.slug}`} key={farm.id}>
                <Combobox.Option
                  value={farm.slug}
                  className={({ active }) =>
                    classNames(
                      "relative cursor-pointer select-none divide-x-2 py-2 pl-3 pr-9",
                      active ? "bg-indigo-600 text-white" : "text-gray-900"
                    )
                  }
                >
                  <span className={"block truncate"}>{farm.name}</span>
                </Combobox.Option>
              </Link>
            ))}
            {data.products && data.products.length > 0 && (
              <h3 className="flex items-center border-b-1 px-4 py-2 text-xl">
                Products
              </h3>
            )}
            {data.products.map((product) => (
              <Link
                key={product?.id}
                href={`/storefront/${product?.farm?.slug || ""}/products/${
                  product.name
                }`}
              >
                <Combobox.Option
                  value={product}
                  className={({ active }) =>
                    classNames(
                      "relative flex cursor-pointer select-none items-center justify-start gap-4 py-2 pl-5 pr-9 text-lg",
                      active ? "bg-indigo-600 text-white" : "text-gray-900"
                    )
                  }
                >
                  <span className={"block truncate"}>{product.name}</span>
                  <span className={"block truncate text-sm"}>
                    {product?.farm?.name}
                  </span>
                </Combobox.Option>
              </Link>
            ))}
          </Combobox.Options>
        )}
      </Combobox>
      {/* <input
        type="search"
        className="input-primary w-full rounded-full font-bold focus-visible:outline-none"
        onChange={(e) => {
          handleSearch(e);
          refetch();
        }}
      />
      {}
      <select placeholder="Search for anything!">
        {data?.farms.map((farm) => (
          <option value={farm.name}>{farm.name}</option>
        ))}
      </select> */}
    </>
  );
};

export const TextArea: FC<InputProps> = ({ placeholder }) => {
  return (
    <textarea
      className="input-primary w-full font-bold focus-visible:outline-none"
      placeholder={placeholder}
    ></textarea>
  );
};
