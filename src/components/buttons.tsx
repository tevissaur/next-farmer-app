import {
  SignInButton,
  SignOutButton,
  SignUpButton,
  useUser,
} from "@clerk/nextjs";
import Link from "next/dist/client/link";
import { FC, PropsWithChildren, ReactElement } from "react";


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
    <Link href={href}>
      <button className="btn-primary">{label}</button>
    </Link>
  );
};
