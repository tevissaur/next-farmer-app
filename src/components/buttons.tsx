import { SignInButton, SignOutButton, SignUpButton } from "@clerk/nextjs";
import Link from "next/dist/client/link";

export const SignInButtonStyled = () => {
  return (
    <SignInButton mode="modal">
      <button className="btn-primary">Sign In</button>
    </SignInButton>
  );
};
export const SignUpButtonStyled = () => {
  return (
    <SignUpButton mode="modal">
      <button className="btn-secondary">Sign Up</button>
    </SignUpButton>
  );
};
export const SignOutButtonStyled = () => {
  return (
    <SignOutButton>
      <button className="btn-primary">Sign Out</button>
    </SignOutButton>
  );
};
export const NavItem = ({ href, label }: { href: string; label: string }) => {
  return (
    <Link href={href} className="btn-primary">
      {label}
    </Link>
  );
};
