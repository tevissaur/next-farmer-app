import { FC, PropsWithChildren } from "react";

interface InputProps extends PropsWithChildren {
  label?: string;
  className?: string;
  type?: string;
  placeholder?: string;
}

export const DefaultStyleInput: FC<InputProps> = ({
  className,
  type,
  placeholder,
}) => {
  return (
    <input
      type={type}
      className={`input-primary ${className || ""}`}
      placeholder={placeholder}
    />
  );
};

export const SearchBar = () => {
  return (
    <DefaultStyleInput
      type="search"
      placeholder="Search for anything!"
      className="w-full rounded-full font-bold focus-visible:outline-none"
    />
  );
};

export const TextArea = () => {
  return (
    <textarea className="input-primary font-bold focus-visible:outline-none">
      Hello
    </textarea>
  );
};
