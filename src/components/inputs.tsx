interface InputProps {
  label?: string;
  className?: string;
  type?: string;
  placeholder?: string;
}

export const DefaultStyleInput = ({
  className,
  type,
  placeholder,
}: InputProps) => {
  return (
    <input
      type={type}
      className={`m-1 translate-x-reverse-0.5 translate-y-reverse-0.5 rounded-full border-1 border-black bg-black/25 px-4 py-2 text-black shadow-outline transition-all duration-200 ${className || ""}`}
      placeholder={placeholder}
    />
  );
};

export const SearchBar = () => {
  return <DefaultStyleInput type="text" placeholder="Search for anything!" className="w-full focus-visible:outline-none font-bold" />;
};
