import { FC, PropsWithChildren } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

interface InputProps extends PropsWithChildren {
  placeholder?: string;
}

export const SearchBar: FC<InputProps> = ({ placeholder }) => {
  return (
    <input
      type="search"
      placeholder="Search for anything!"
      className="input-primary w-full rounded-full font-bold focus-visible:outline-none"
    />
  );
};

export const TextArea: FC<InputProps> = ({ placeholder }) => {
  return (
    <textarea className="input-primary font-bold focus-visible:outline-none w-full" placeholder={placeholder}>
      
    </textarea>
  );
};
