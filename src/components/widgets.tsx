import { FC, PropsWithChildren } from "react";
import { api } from "~/utils/api";

interface InputProps extends PropsWithChildren {
  placeholder?: string;
}

export const TopFarms: FC<InputProps> = ({ placeholder }) => {
  const {
    data: farms,
    isError,
    isLoading,
    isSuccess,
  } = api.farms.getAll.useQuery();
  return (
    <>
      {farms &&
        isSuccess &&
        farms.map((farm) => (
          <div key={farm.id} className="flex items-center justify-center">
            {farm.name}
          </div>
        ))}
    </>
  );
};

export const TextArea: FC<InputProps> = ({ placeholder }) => {
  return (
    <textarea
      className="input-primary font-bold focus-visible:outline-none"
      placeholder={placeholder}
    ></textarea>
  );
};
