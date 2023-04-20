import {
  SignInButton,
  SignOutButton,
  SignUpButton,
  useUser,
} from "@clerk/nextjs";
import Link from "next/dist/client/link";

interface ButtonProps {
  label?: string;
  className?: string;
}

export const DefaultStyleButton = ({ label, className }: ButtonProps) => {
  return (
    <button
      className={`m-1 translate-x-reverse-0.5 translate-y-reverse-0.5 rounded-full border-1 border-black bg-black/25 px-4 py-1 font-bold text-black shadow-outline transition-all duration-200 hover:translate-x-0 hover:bg-black/60 hover:text-white hover:shadow-none ${className || ""}`}
    >
      {label}
    </button>
  );
};
export const SignInButtonStyled = () => {
  return (
    <SignInButton mode="modal">
      <DefaultStyleButton label="Sign In" />
    </SignInButton>
  );
};
export const SignUpButtonStyled = () => {
  return (
    <SignUpButton mode="modal">
      <DefaultStyleButton label="Sign Up" />
    </SignUpButton>
  );
};
export const SignOutButtonStyled = () => {
  return (
    <SignOutButton>
      <DefaultStyleButton label="Sign Out" />
    </SignOutButton>
  );
};
export const NavItem = ({ href, label }: { href: string; label: string }) => {
  return (
    <Link href={href}>
      <DefaultStyleButton label={label} />
    </Link>
  );
};
